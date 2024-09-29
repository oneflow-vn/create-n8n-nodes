import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Batch Create Table'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Batch Create Table',
  value: 'Batch Create Table',
  action: 'Batch Create Table',
  description:
    'Batch Create Table\r\n\r\nAPI reference documentation: [Batch Create Table]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table/batch_create)',
  routing: {
    request: {
      method: 'POST',
      url: '=/bitable/v1/apps/{{$parameter["app_token"]}}/tables/batch_create',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
