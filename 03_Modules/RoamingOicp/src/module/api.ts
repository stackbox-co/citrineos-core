// Copyright (c) 2023 Stackbox GmbH
// Copyright Contributors to the CitrineOS Project
//
// SPDX-License-Identifier: Apache 2.0

import { ILogObj, Logger } from 'tslog';
import { AbstractModuleApi, AsDataEndpoint, EvseDataRecord, HttpMethod, Namespace } from "@citrineos/base";
import { IRoamingOicpModuleApi } from "./interface";
import { RoamingOicpModule } from "./module";
import { FastifyInstance, FastifyRequest } from "fastify";

/**
 * Server API for the RoamingOicp module.
 */
export class RoamingOicpModuleApi extends AbstractModuleApi<RoamingOicpModule> implements IRoamingOicpModuleApi {
    
    constructor(roamingOicpModule: RoamingOicpModule, server: FastifyInstance, logger?: Logger<ILogObj>) {
        super(roamingOicpModule, server, logger);
    }

    /**
     * Data Endpoints
     */

    @AsDataEndpoint(Namespace.VariableAttributeType, HttpMethod.Put, Schema?)
    async putDeviceModelVariables(request: FastifyRequest<{ Body: EvseDataRecord, }>): Promise<EvseDataRecord> {
        return this._module.evseDataRecordRepository.create(request.body, ).then(async evseDateRecord => {
            return evseDateRecord!;
        });
    }
}