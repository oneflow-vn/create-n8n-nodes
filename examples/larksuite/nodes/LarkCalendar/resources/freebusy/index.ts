import { INodeProperties } from 'n8n-workflow'

import * as queryAvailability from './query-availability'

export const name = 'Freebusy'

export const properties: INodeProperties[] = [...queryAvailability.properties]
