import { INodeProperties } from 'n8n-workflow'

import * as generateCalDavConfiguration from './generate-cal-dav-configuration'

export const name = 'Setting'

export const properties: INodeProperties[] = [
  ...generateCalDavConfiguration.properties,
]
