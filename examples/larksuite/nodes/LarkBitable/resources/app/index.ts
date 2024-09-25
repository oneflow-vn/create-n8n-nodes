import { INodeProperties } from 'n8n-workflow'

import * as getAppInformation from './get-app-information'

export const name = 'App'

export const properties: INodeProperties[] = [...getAppInformation.properties]
