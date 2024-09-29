import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'List All Fields'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'List All Fields',
  value: 'List All Fields',
  action: 'List all fields',
  description:
    'Get all fields according to app_token and table_id\r\n\r\nAPI reference documentation: [List all fields]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-field/list)',
  routing: {
    request: {
      method: 'GET',
      url: '=/bitable/v1/apps/{{$parameter["app_token"]}}/tables/{{$parameter["table_id"]}}/fields',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
