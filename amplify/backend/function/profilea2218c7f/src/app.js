/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/
/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_FOOTPRINT3UYVQUM6JRC4PF63CDE7NJSXEIDEV_ARN
	STORAGE_FOOTPRINT3UYVQUM6JRC4PF63CDE7NJSXEIDEV_NAME
	STORAGE_FOOTPRINT3UYVQUM6JRC4PF63CDE7NJSXEIDEV_STREAMARN
	STORAGE_FOOTPRINTEPWHHIO5ABGDTHPZPWFKAOX4BASTG_ARN
	STORAGE_FOOTPRINTEPWHHIO5ABGDTHPZPWFKAOX4BASTG_NAME
	STORAGE_FOOTPRINTEPWHHIO5ABGDTHPZPWFKAOX4BASTG_STREAMARN
	STORAGE_PARAMETER3UYVQUM6JRC4PF63CDE7NJSXEIDEV_ARN
	STORAGE_PARAMETER3UYVQUM6JRC4PF63CDE7NJSXEIDEV_NAME
	STORAGE_PARAMETER3UYVQUM6JRC4PF63CDE7NJSXEIDEV_STREAMARN
	STORAGE_PARAMETEREPWHHIO5ABGDTHPZPWFKAOX4BASTG_ARN
	STORAGE_PARAMETEREPWHHIO5ABGDTHPZPWFKAOX4BASTG_NAME
	STORAGE_PARAMETEREPWHHIO5ABGDTHPZPWFKAOX4BASTG_STREAMARN
	STORAGE_PROFILE3UYVQUM6JRC4PF63CDE7NJSXEIDEV_ARN
	STORAGE_PROFILE3UYVQUM6JRC4PF63CDE7NJSXEIDEV_NAME
	STORAGE_PROFILE3UYVQUM6JRC4PF63CDE7NJSXEIDEV_STREAMARN
	STORAGE_PROFILEEPWHHIO5ABGDTHPZPWFKAOX4BASTG_ARN
	STORAGE_PROFILEEPWHHIO5ABGDTHPZPWFKAOX4BASTG_NAME
	STORAGE_PROFILEEPWHHIO5ABGDTHPZPWFKAOX4BASTG_STREAMARN
Amplify Params - DO NOT EDIT */

const { estimateMobility } = require('./mobility')
const { estimateFood } = require('./food')
const { estimateOther } = require('./other')
const { estimateHousing } = require('./housing')

const AWS = require('aws-sdk')
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const bodyParser = require('body-parser')
const express = require('express')
const { v4: uuid } = require('uuid')
const shortid = require('shortid')

AWS.config.update({ region: process.env.TABLE_REGION })

let suffix = '3uyvqum6jrc4pf63cde7njsxei-dev'
if (process.env.ENV && process.env.ENV !== 'NONE') {
  if (process.env.ENV === 'stg') {
    suffix = 'epwhhio5abgdthpzpwfkaox4ba-stg'
  }
}

let dynamoParam = {}
let footprintTableName = 'Footprint-' + suffix
let parameterTableName = 'Parameter-' + suffix
let profileTableName = 'Profile-' + suffix

if (
  'AWS_EXECUTION_ENV' in process.env &&
  process.env.AWS_EXECUTION_ENV.endsWith('-mock')
) {
  // for local mock
  dynamoParam = {
    endpoint: 'http://localhost:62224',
    region: 'us-fake-1',
    accessKeyId: 'fake',
    secretAccessKey: 'fake'
  }
  footprintTableName = 'FootprintTable'
  parameterTableName = 'ParameterTable'
  profileTableName = 'ProfileTable'
}

const dynamodb = new AWS.DynamoDB.DocumentClient(dynamoParam)

const path = '/profiles'

// declare a new express app
const app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  next()
})

/*****************************************
 * HTTP Get method for get single object *
 *****************************************/

app.get(path + '/:id', async (req, res) => {
  const params = {
    TableName: profileTableName,
    Key: { id: req.params.id }
  }

  try {
    const data = await dynamodb.get(params).promise()
    res.json(data.Item)
  } catch (err) {
    res.statusCode = 500
    res.json({ error: 'Could not load item: ' + err })
  }
})

const updateProfile = async (dynamodb, profile) => {
  const operations = [
    {
      answer: profile.mobilityAnswer,
      estimate: estimateMobility
    },
    {
      answer: profile.housingAnswer,
      estimate: estimateHousing
    },
    {
      answer: profile.foodAnswer,
      estimate: estimateFood
    },
    {
      answer: profile.otherAnswer,
      estimate: estimateOther
    }
  ]

  profile.baselines = []
  profile.estimations = []

  for (const operation of operations) {
    if (operation.answer) {
      const { baselines, estimations } = await operation.estimate(
        dynamodb,
        operation.answer,
        footprintTableName,
        parameterTableName
      )
      profile.baselines = profile.baselines.concat(baselines)
      profile.estimations = profile.estimations.concat(estimations)
    }
  }
}

/************************************
 * HTTP put method for insert object *
 *************************************/

app.put(path + '/:id', async (req, res) => {
  const id = req.params.id
  try {
    let params = {
      TableName: profileTableName,
      Key: { id }
    }
    let data = await dynamodb.get(params).promise()
    const profile = data.Item
    const mobilityAnswer = req.body.mobilityAnswer
    const housingAnswer = req.body.housingAnswer
    const foodAnswer = req.body.foodAnswer
    const otherAnswer = req.body.otherAnswer

    if (mobilityAnswer) {
      profile.mobilityAnswer = mobilityAnswer
    }
    if (housingAnswer) {
      profile.housingAnswer = housingAnswer
    }
    if (foodAnswer) {
      profile.foodAnswer = foodAnswer
    }
    if (otherAnswer) {
      profile.otherAnswer = otherAnswer
    }
    await updateProfile(dynamodb, profile)
    profile.updatedAt = new Date().toISOString()

    params = {
      TableName: profileTableName,
      Item: profile
    }
    data = await dynamodb.put(params).promise()
    res.json({ success: 'put call succeed!', url: req.url, data: profile })
  } catch (err) {
    res.statusCode = 500
    res.json({ error: 'Could not load items: ' + err })
  }
})

/************************************
 * HTTP post method for insert object *
 *************************************/

app.post(path, async (req, res) => {
  try {
    const profile = {
      id: uuid(),
      shareId: shortid.generate(),
      mobilityAnswer: req.body.mobilityAnswer,
      housingAnswer: req.body.housingAnswer,
      foodAnswer: req.body.foodAnswer,
      otherAnswer: req.body.otherAnswer,
      baselines: [],
      estimations: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    await updateProfile(dynamodb, profile)

    const params = {
      TableName: profileTableName,
      Item: profile
    }
    const data = await dynamodb.put(params).promise()
    res.json({ success: 'post call succeed!', url: req.url, data: profile })
  } catch (err) {
    res.statusCode = 500
    res.json({ error: err, url: req.url, body: req.body })
  }
})

app.listen(3000, function () {
  console.log('App started')
})

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
