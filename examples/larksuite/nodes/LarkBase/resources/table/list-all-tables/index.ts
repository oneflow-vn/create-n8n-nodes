import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'List All Tables'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'List All Tables',
  value: 'List All Tables',
  action: 'List all tables',
  description:
    'According to app_token, get all tables under app\r\n\r\nAPI reference documentation: [List all tables]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table/list)',
  routing: {
    request: {
      method: 'GET',
      url: '=/bitable/v1/apps/{{$parameter["app_token"]}}/tables',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
