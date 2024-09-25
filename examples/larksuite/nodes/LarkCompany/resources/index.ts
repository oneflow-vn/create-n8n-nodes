import { INodeProperties } from 'n8n-workflow'

import * as tenant from './tenant'

export const properties: INodeProperties[] = [...tenant.properties]
