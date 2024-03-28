// Copyright (c) 2023 Stackbox GmbH
// Copyright Contributors to the CitrineOS Project
//
// SPDX-License-Identifier: Apache 2.0

import { ILogObj, Logger } from 'tslog';
import { AbstractModuleApi, AsDataEndpoint, CallAction, EvseDataRecord, EvseDataRecordSchema, HttpMethod, Namespace } from "@citrineos/base";
import { IRoamingOicpModuleApi } from "./interface";
import { RoamingOicpModule } from "./module";
import { FastifyInstance, FastifyRequest } from "fastify";

// const querySchema = {"properties": {"evseId": {"type": "string",}}, "required": ["evseId"]}
const querySchema = {"evseId": {"type": "string",}}

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
    @AsDataEndpoint(Namespace.EvseDataRecord, HttpMethod.Put, querySchema, EvseDataRecordSchema)
    async putEvseDataRecord(request: FastifyRequest<{ Body: EvseDataRecord, Querystring: { evseId: string; }}>): Promise<EvseDataRecord> {
        // return this._module.evseDataRecordRepository.create(request.body, ).then(async evseDateRecord => {
        //     return evseDateRecord!;
        // });
        this._logger.info("putEvseDataRecord called");
        return request.body;
    }

    /**
    * Overrides superclass method to generate the URL path based on the input {@link CallAction} and the module's endpoint prefix configuration.
    *
    * @param {CallAction} input - The input {@link CallAction}.
    * @return {string} - The generated URL path.
    */
    protected _toMessagePath(input: CallAction): string {
        const endpointPrefix = this._module.config.modules.monitoring.endpointPrefix;
        return super._toMessagePath(input, endpointPrefix);
    }

    
    /**
     * Overrides superclass method to generate the URL path based on the input {@link Namespace} and the module's endpoint prefix configuration.
     *
     * @param {CallAction} input - The input {@link Namespace}.
     * @return {string} - The generated URL path.
     */
    protected _toDataPath(input: Namespace): string {
        const endpointPrefix = this._module.config.modules.monitoring.endpointPrefix;
        return super._toDataPath(input, endpointPrefix);
    }
}