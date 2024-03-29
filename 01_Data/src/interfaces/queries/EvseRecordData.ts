// Copyright (c) 2023 Stackbox GmbH
// Copyright Contributors to the CitrineOS Project
//
// SPDX-License-Identifier: Apache 2.0

import { EvseID, QuerySchema } from "@citrineos/base";

export interface CreateOrUpdateEvseDataRecordQuerystring {
    evseId: EvseID,
}

export const CreateOrUpdateEvseDataRecordQuerySchema = QuerySchema([
    ["evseId", "string"], ], ["evseId", ]);