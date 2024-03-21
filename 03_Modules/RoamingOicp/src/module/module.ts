// Copyright (c) 2023 Stackbox GmbH
// Copyright Contributors to the CitrineOS Project
//
// SPDX-License-Identifier: Apache 2.0

import { AbstractModule, CallAction, EventGroup, ICache, IMessageHandler, IMessageSender, SystemConfig } from "@citrineos/base";
import { IOicpEvseDataRecordRepository, sequelize } from "@citrineos/data";
import { RabbitMqReceiver, RabbitMqSender, Timer } from "@citrineos/util";
import deasyncPromise from "deasync-promise";
import { ILogObj, Logger } from 'tslog';

export class RoamingOicpModule extends AbstractModule {
    protected _requests: CallAction[] = [ CallAction.StatusNotification, ];
    protected _responses: CallAction[] = [];
    protected _evseDataRecordRepository: IOicpEvseDataRecordRepository;

    /**
     * This is the constructor function that initializes the {@link RoamingOicpModule}.
     * 
     * @param {SystemConfig} config - The `config` contains configuration settings for the module.
     *  
     * @param {ICache} [cache] - The cache instance which is shared among the modules & Central System to pass information such as blacklisted actions or boot status.
     * 
     * @param {IMessageSender} [sender] - The `sender` parameter is an optional parameter that represents an instance of the {@link IMessageSender} interface. 
     * It is used to send messages from the central system to external systems or devices. If no `sender` is provided, a default {@link RabbitMqSender} instance is created and used.
     * 
     * @param {IMessageHandler} [handler] - The `handler` parameter is an optional parameter that represents an instance of the {@link IMessageHandler} interface. 
     * It is used to handle incoming messages and dispatch them to the appropriate methods or functions. If no `handler` is provided, a default {@link RabbitMqReceiver} instance is created and used.
     * 
     * @param {Logger<ILogObj>} [logger] - The `logger` parameter is an optional parameter that represents an instance of {@link Logger<ILogObj>}. 
     * It is used to propagate system wide logger settings and will serve as the parent logger for any sub-component logging. If no `logger` is provided, a default {@link Logger<ILogObj>} instance is created and used.
     *  
     * @param {IDeviceModelRepository} [deviceModelRepository] - An optional parameter of type {@link IDeviceModelRepository} which represents a repository for accessing and manipulating variable data.
     * If no `deviceModelRepository` is provided, a default {@link sequelize:deviceModelRepository} instance is created and used.
     *
     * @param {ISecurityEventRepository} [securityEventRepository] - An optional parameter of type {@link ISecurityEventRepository} which represents a repository for accessing security event notification data.
     *
     * @param {IVariableMonitoringRepository} [variableMonitoringRepository] - An optional parameter of type {@link IVariableMonitoringRepository} which represents a repository for accessing and manipulating monitoring data.
     */
    constructor(
        config: SystemConfig,
        cache: ICache,
        sender?: IMessageSender,
        handler?: IMessageHandler,
        logger?: Logger<ILogObj>,
        evseDataRecordRepository?: IOicpEvseDataRecordRepository,
    ) {
        super(config, cache, handler || new RabbitMqReceiver(config, logger), sender || new RabbitMqSender(config, logger), EventGroup.RoamingOicp, logger);

        const timer = new Timer();
        this._logger.info(`Initializing...`);

        if (!deasyncPromise(this._initHandler(this._requests, this._responses))) {
        throw new Error("Could not initialize module due to failure in handler initialization.");
        }

        this._evseDataRecordRepository = evseDataRecordRepository || new sequelize.OicpEvseDataRecordRepository(config, this._logger);
        
        this._logger.info(`Initialized in ${timer.end()}ms...`);
    }
}