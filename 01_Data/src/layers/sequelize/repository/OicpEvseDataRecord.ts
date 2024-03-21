// Copyright (c) 2023 S44, LLC
// Copyright Contributors to the CitrineOS Project
//
// SPDX-License-Identifier: Apache 2.0


import { IOicpEvseDataRecordRepository } from "../../../interfaces/repositories";
import { SequelizeRepository } from "./Base"
import { OicpEvseDataRecord } from "../model/ERoaming/EvseDataRecord";

export class OicpEvseDataRecordRepository extends SequelizeRepository<OicpEvseDataRecord> implements IOicpEvseDataRecordRepository {

}