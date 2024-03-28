// Copyright (c) 2023 Stackbox GmbH
// Copyright Contributors to the CitrineOS Project
//
// SPDX-License-Identifier: Apache 2.0

import { EvseDataRecord, EvseDataRecordAccessibilityEnum, EvseDataRecordAccessibilityLocationEnum, EvseDataRecordAddress, EvseDataRecordAuthenticationModesEnum, EvseDataRecordCalibrationLawDataAvailabilityEnum, EvseDataRecordChargingFacilities, EvseDataRecordDeltaTypeEnum, EvseDataRecordDynamicInfoAvailableEnum, EvseDataRecordEnergySource, EvseDataRecordEnvironmentalImpact, EvseDataRecordPaymentOptionsEnum, EvseDataRecordPlugsEnum, EvseDataRecordValueAddedServicesEnum, EvseID, GeoCoordinates, InfoTextType, Namespace, OpeningTimes, OperatorID } from "@citrineos/base";
import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table
export class OicpEvseDataRecord extends Model implements EvseDataRecord {
    

    static readonly MODEL_NAME: string = Namespace.EvseDataRecord;

    /**
    * Fields
    */

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    declare databaseId: number;
    
    @Column(DataType.STRING)
    declare evseID: EvseID;

    @Column(DataType.STRING)
    declare chargingPoolID?: string;

    @Column(DataType.STRING)
    declare chargingStationId?: string;

    @Column(DataType.ARRAY(DataType.JSON))
    declare chargingStationNames: InfoTextType[];

    @Column(DataType.STRING)
    declare hardwareManufacturer?: string;

    @Column(DataType.STRING)
    declare chargingStationImage?: string;

    @Column(DataType.STRING)
    declare subOperatorName?: string;

    @Column(DataType.JSON)
    declare address: EvseDataRecordAddress;

    @Column(DataType.JSON)
    declare geoCoordinates: GeoCoordinates;

    @Column(DataType.ARRAY(DataType.STRING))
    declare plugs: EvseDataRecordPlugsEnum[];

    @Column({
        type: DataType.BOOLEAN, 
        defaultValue: false
    })
    declare dynamicPowerLevel?: boolean;

    @Column(DataType.ARRAY(DataType.JSON))
    declare chargingFacilities: EvseDataRecordChargingFacilities[];

    @Column({
        type: DataType.BOOLEAN, 
        defaultValue: false
    })
    declare renewableEnergy: boolean;

    @Column(DataType.ARRAY(DataType.JSON))
    declare energySource?: EvseDataRecordEnergySource[];

    @Column(DataType.JSON)
    declare environmentalImpact?: EvseDataRecordEnvironmentalImpact;

    @Column({
        type: DataType.STRING, 
        defaultValue: EvseDataRecordCalibrationLawDataAvailabilityEnum.NotAvailable
    })
    declare calibrationLawDataAvailability: EvseDataRecordCalibrationLawDataAvailabilityEnum;

    @Column({
        type: DataType.ARRAY(DataType.STRING), 
        defaultValue: [],
    })
    declare authenticationModes: EvseDataRecordAuthenticationModesEnum[];

    @Column(DataType.INTEGER)
    declare maxCapacity?: number;

    @Column({
        type: DataType.ARRAY(DataType.STRING), 
        defaultValue: [],
    })
    declare paymentOptions: EvseDataRecordPaymentOptionsEnum[];

    @Column({
        type: DataType.ARRAY(DataType.STRING), 
        defaultValue: [],
    })
    declare valueAddedServices: EvseDataRecordValueAddedServicesEnum[];

    @Column({
        type: DataType.STRING, 
        defaultValue: EvseDataRecordAccessibilityEnum.FreePubliclyAccessible,
    })
    declare accessibility: EvseDataRecordAccessibilityEnum;

    @Column(DataType.STRING)
    declare accessibilityLocation?: EvseDataRecordAccessibilityLocationEnum;

    @Column(DataType.STRING)
    declare hotlinePhoneNumber: string;

    @Column(DataType.ARRAY(DataType.JSON))
    declare additionalInfo?: InfoTextType[];

    @Column(DataType.ARRAY(DataType.JSON))
    declare chargingStationLocationReference?: InfoTextType[];

    @Column(DataType.JSON)
    declare geoChargingPointEntrance?: GeoCoordinates;

    @Column({
        type: DataType.BOOLEAN, 
        defaultValue: true,
    })
    declare isOpen24Hours: boolean;

    @Column(DataType.ARRAY(DataType.JSON))
    declare openingTimes?: OpeningTimes[];

    @Column(DataType.STRING)
    declare hubOperatorID?: OperatorID;

    @Column(DataType.STRING)
    declare clearinghouseID?: string;

    @Column({
        type: DataType.BOOLEAN, 
        defaultValue: true,
    })
    declare isHubjectCompatible: boolean;

    @Column({
        type: DataType.STRING,
        defaultValue: EvseDataRecordDynamicInfoAvailableEnum.True
    })
    declare dynamicInfoAvailable: EvseDataRecordDynamicInfoAvailableEnum;

}