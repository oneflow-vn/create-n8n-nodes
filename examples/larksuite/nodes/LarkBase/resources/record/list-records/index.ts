import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'List Records'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'List Records',
  value: 'List Records',
  action: 'List records',
  description:
    'list records,Up to 100 lines at a time, paging is supported（Currently, two-way link and the return of search reference fields are not supported. The search reference field can be converted into a formula field. The search reference is essentially a lookup formula）\r\n\r\nAPI reference documentation: [List records]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-record/list)',
  routing: {
    request: {
      method: 'GET',
      url: '=/bitable/v1/apps/{{$parameter["app_token"]}}/tables/{{$parameter["table_id"]}}/records',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
