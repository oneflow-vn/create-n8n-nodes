import { INodeProperties } from 'n8n-workflow'

import * as updateAppMessages from './update-app-messages'

export const name = 'Message  Message Card'

export const properties: INodeProperties[] = [...updateAppMessages.properties]
