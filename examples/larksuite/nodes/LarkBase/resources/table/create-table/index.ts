import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Create Table'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Create Table',
  value: 'Create Table',
  action: 'Create Table',
  description:
    'Create a table\r\n\r\nAPI reference documentation: [Create Table]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table/create)',
  routing: {
    request: {
      method: 'POST',
      url: '=/bitable/v1/apps/{{$parameter["app_token"]}}/tables',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
