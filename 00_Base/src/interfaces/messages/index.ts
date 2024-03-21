// Copyright (c) 2023 S44, LLC
// Copyright Contributors to the CitrineOS Project
//
// SPDX-License-Identifier: Apache 2.0

export type HandlerProperties = string | object | undefined;

export class RetryMessageError extends Error {
  constructor(retryReason: string) {
    super(retryReason);
  }
}

export enum MessageState {
  Request = 1,
  Response = 2,
  Unknown = 99,
}

export enum MessageOrigin {
  CentralSystem = 'csms',
  ChargingStation = 'cs',
}

export enum EventGroup {
  General = 'general',
  Certificates = "certificates",
  Configuration = "configuration",
  EVDriver = "evdriver",
  Monitoring = 'monitoring',
  Reporting = 'reporting',
  RoamingOicp = "roamingoicp",
  SmartCharging = 'smartcharging',
  Transactions = 'transactions',
}

export { IMessage, Message } from "./Message";
export { IMessageHandler } from "./MessageHandler";
export { IMessageSender } from "./MessageSender";
export { IMessageRouter } from "./MessageRouter";
export { IMessageContext } from "./MessageContext";
export { IMessageConfirmation } from "./MessageConfirmation";
export { AbstractMessageHandler } from "./AbstractMessageHandler";
export { AbstractMessageSender } from "./AbstractMessageSender";








