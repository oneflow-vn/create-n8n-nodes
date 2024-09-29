import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Delete A Record'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Delete A Record',
  value: 'Delete A Record',
  action: 'Delete a Record',
  description:
    'Delete a Record\r\n\r\nAPI reference documentation: [Delete a Record]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-record/delete)',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/bitable/v1/apps/{{$parameter["app_token"]}}/tables/{{$parameter["table_id"]}}/records/{{$parameter["record_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
