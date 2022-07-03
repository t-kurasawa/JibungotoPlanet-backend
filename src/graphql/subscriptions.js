"use strict";
/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten
exports.__esModule = true;
exports.onDeleteProfile = exports.onUpdateProfile = exports.onCreateProfile = exports.onDeleteOptionIntensityRate = exports.onUpdateOptionIntensityRate = exports.onCreateOptionIntensityRate = exports.onDeleteOption = exports.onUpdateOption = exports.onCreateOption = exports.onDeleteParameter = exports.onUpdateParameter = exports.onCreateParameter = exports.onDeleteFootprint = exports.onUpdateFootprint = exports.onCreateFootprint = void 0;
exports.onCreateFootprint = "\n  subscription OnCreateFootprint {\n    onCreateFootprint {\n      dirAndDomain\n      itemAndType\n      subdomain\n      value\n      unit\n      citation\n      createdAt\n      updatedAt\n    }\n  }\n";
exports.onUpdateFootprint = "\n  subscription OnUpdateFootprint {\n    onUpdateFootprint {\n      dirAndDomain\n      itemAndType\n      subdomain\n      value\n      unit\n      citation\n      createdAt\n      updatedAt\n    }\n  }\n";
exports.onDeleteFootprint = "\n  subscription OnDeleteFootprint {\n    onDeleteFootprint {\n      dirAndDomain\n      itemAndType\n      subdomain\n      value\n      unit\n      citation\n      createdAt\n      updatedAt\n    }\n  }\n";
exports.onCreateParameter = "\n  subscription OnCreateParameter {\n    onCreateParameter {\n      category\n      key\n      value\n      unit\n      citation\n      createdAt\n      updatedAt\n    }\n  }\n";
exports.onUpdateParameter = "\n  subscription OnUpdateParameter {\n    onUpdateParameter {\n      category\n      key\n      value\n      unit\n      citation\n      createdAt\n      updatedAt\n    }\n  }\n";
exports.onDeleteParameter = "\n  subscription OnDeleteParameter {\n    onDeleteParameter {\n      category\n      key\n      value\n      unit\n      citation\n      createdAt\n      updatedAt\n    }\n  }\n";
exports.onCreateOption = "\n  subscription OnCreateOption {\n    onCreateOption {\n      option\n      domainItemAndType\n      value\n      args\n      operation\n      citation\n      createdAt\n      updatedAt\n    }\n  }\n";
exports.onUpdateOption = "\n  subscription OnUpdateOption {\n    onUpdateOption {\n      option\n      domainItemAndType\n      value\n      args\n      operation\n      citation\n      createdAt\n      updatedAt\n    }\n  }\n";
exports.onDeleteOption = "\n  subscription OnDeleteOption {\n    onDeleteOption {\n      option\n      domainItemAndType\n      value\n      args\n      operation\n      citation\n      createdAt\n      updatedAt\n    }\n  }\n";
exports.onCreateOptionIntensityRate = "\n  subscription OnCreateOptionIntensityRate {\n    onCreateOptionIntensityRate {\n      option\n      defaultValue\n      range\n      createdAt\n      updatedAt\n    }\n  }\n";
exports.onUpdateOptionIntensityRate = "\n  subscription OnUpdateOptionIntensityRate {\n    onUpdateOptionIntensityRate {\n      option\n      defaultValue\n      range\n      createdAt\n      updatedAt\n    }\n  }\n";
exports.onDeleteOptionIntensityRate = "\n  subscription OnDeleteOptionIntensityRate {\n    onDeleteOptionIntensityRate {\n      option\n      defaultValue\n      range\n      createdAt\n      updatedAt\n    }\n  }\n";
exports.onCreateProfile = "\n  subscription OnCreateProfile {\n    onCreateProfile {\n      id\n      shareId\n      mobilityAnswer {\n        hasPrivateCar\n        carIntensityFactorKey\n        carChargingKey\n        carPassengersKey\n        privateCarAnnualMileage\n        trainWeeklyTravelingTime\n        busWeeklyTravelingTime\n        motorbikeWeeklyTravelingTime\n        otherCarWeeklyTravelingTime\n        hasWeeklyTravelingTime\n        mileageByAreaFirstKey\n        otherCarAnnualTravelingTime\n        trainAnnualTravelingTime\n        busAnnualTravelingTime\n        motorbikeAnnualTravelingTime\n        airplaneAnnualTravelingTime\n        ferryAnnualTravelingTime\n      }\n      housingAnswer {\n        residentCount\n        housingSizeKey\n        housingInsulationKey\n        electricityIntensityKey\n        electricityMonthlyConsumption\n        electricitySeasonFactorKey\n        useGas\n        energyHeatIntensityKey\n        gasMonthlyConsumption\n        gasSeasonFactorKey\n        useKerosene\n        keroseneMonthlyConsumption\n        keroseneMonthCount\n        housingAmountByRegionKey\n      }\n      foodAnswer {\n        foodIntakeFactorKey\n        foodDirectWasteFactorKey\n        foodLeftoverFactorKey\n        dishBeefFactorKey\n        dishPorkFactorKey\n        dishChickenFactorKey\n        dishSeafoodFactorKey\n        dairyFoodFactorKey\n        alcoholFactorKey\n        softDrinkSnackFactorKey\n        eatOutFactorKey\n      }\n      otherAnswer {\n        dailyGoodsAmountKey\n        communicationAmountKey\n        applianceFurnitureAmountKey\n        serviceFactorKey\n        hobbyGoodsFactorKey\n        clothesBeautyFactorKey\n        leisureSportsFactorKey\n        travelFactorKey\n      }\n      actionIntensityRate {\n        option\n        value\n        defaultValue\n        range\n      }\n      baselines {\n        domain\n        item\n        type\n        subdomain\n        value\n        unit\n        citation\n      }\n      estimations {\n        domain\n        item\n        type\n        subdomain\n        value\n        unit\n      }\n      actions {\n        option\n        domain\n        item\n        type\n        subdomain\n        value\n        unit\n        optionValue\n        args\n        operation\n      }\n      createdAt\n      updatedAt\n    }\n  }\n";
exports.onUpdateProfile = "\n  subscription OnUpdateProfile {\n    onUpdateProfile {\n      id\n      shareId\n      mobilityAnswer {\n        hasPrivateCar\n        carIntensityFactorKey\n        carChargingKey\n        carPassengersKey\n        privateCarAnnualMileage\n        trainWeeklyTravelingTime\n        busWeeklyTravelingTime\n        motorbikeWeeklyTravelingTime\n        otherCarWeeklyTravelingTime\n        hasWeeklyTravelingTime\n        mileageByAreaFirstKey\n        otherCarAnnualTravelingTime\n        trainAnnualTravelingTime\n        busAnnualTravelingTime\n        motorbikeAnnualTravelingTime\n        airplaneAnnualTravelingTime\n        ferryAnnualTravelingTime\n      }\n      housingAnswer {\n        residentCount\n        housingSizeKey\n        housingInsulationKey\n        electricityIntensityKey\n        electricityMonthlyConsumption\n        electricitySeasonFactorKey\n        useGas\n        energyHeatIntensityKey\n        gasMonthlyConsumption\n        gasSeasonFactorKey\n        useKerosene\n        keroseneMonthlyConsumption\n        keroseneMonthCount\n        housingAmountByRegionKey\n      }\n      foodAnswer {\n        foodIntakeFactorKey\n        foodDirectWasteFactorKey\n        foodLeftoverFactorKey\n        dishBeefFactorKey\n        dishPorkFactorKey\n        dishChickenFactorKey\n        dishSeafoodFactorKey\n        dairyFoodFactorKey\n        alcoholFactorKey\n        softDrinkSnackFactorKey\n        eatOutFactorKey\n      }\n      otherAnswer {\n        dailyGoodsAmountKey\n        communicationAmountKey\n        applianceFurnitureAmountKey\n        serviceFactorKey\n        hobbyGoodsFactorKey\n        clothesBeautyFactorKey\n        leisureSportsFactorKey\n        travelFactorKey\n      }\n      actionIntensityRate {\n        option\n        value\n        defaultValue\n        range\n      }\n      baselines {\n        domain\n        item\n        type\n        subdomain\n        value\n        unit\n        citation\n      }\n      estimations {\n        domain\n        item\n        type\n        subdomain\n        value\n        unit\n      }\n      actions {\n        option\n        domain\n        item\n        type\n        subdomain\n        value\n        unit\n        optionValue\n        args\n        operation\n      }\n      createdAt\n      updatedAt\n    }\n  }\n";
exports.onDeleteProfile = "\n  subscription OnDeleteProfile {\n    onDeleteProfile {\n      id\n      shareId\n      mobilityAnswer {\n        hasPrivateCar\n        carIntensityFactorKey\n        carChargingKey\n        carPassengersKey\n        privateCarAnnualMileage\n        trainWeeklyTravelingTime\n        busWeeklyTravelingTime\n        motorbikeWeeklyTravelingTime\n        otherCarWeeklyTravelingTime\n        hasWeeklyTravelingTime\n        mileageByAreaFirstKey\n        otherCarAnnualTravelingTime\n        trainAnnualTravelingTime\n        busAnnualTravelingTime\n        motorbikeAnnualTravelingTime\n        airplaneAnnualTravelingTime\n        ferryAnnualTravelingTime\n      }\n      housingAnswer {\n        residentCount\n        housingSizeKey\n        housingInsulationKey\n        electricityIntensityKey\n        electricityMonthlyConsumption\n        electricitySeasonFactorKey\n        useGas\n        energyHeatIntensityKey\n        gasMonthlyConsumption\n        gasSeasonFactorKey\n        useKerosene\n        keroseneMonthlyConsumption\n        keroseneMonthCount\n        housingAmountByRegionKey\n      }\n      foodAnswer {\n        foodIntakeFactorKey\n        foodDirectWasteFactorKey\n        foodLeftoverFactorKey\n        dishBeefFactorKey\n        dishPorkFactorKey\n        dishChickenFactorKey\n        dishSeafoodFactorKey\n        dairyFoodFactorKey\n        alcoholFactorKey\n        softDrinkSnackFactorKey\n        eatOutFactorKey\n      }\n      otherAnswer {\n        dailyGoodsAmountKey\n        communicationAmountKey\n        applianceFurnitureAmountKey\n        serviceFactorKey\n        hobbyGoodsFactorKey\n        clothesBeautyFactorKey\n        leisureSportsFactorKey\n        travelFactorKey\n      }\n      actionIntensityRate {\n        option\n        value\n        defaultValue\n        range\n      }\n      baselines {\n        domain\n        item\n        type\n        subdomain\n        value\n        unit\n        citation\n      }\n      estimations {\n        domain\n        item\n        type\n        subdomain\n        value\n        unit\n      }\n      actions {\n        option\n        domain\n        item\n        type\n        subdomain\n        value\n        unit\n        optionValue\n        args\n        operation\n      }\n      createdAt\n      updatedAt\n    }\n  }\n";
