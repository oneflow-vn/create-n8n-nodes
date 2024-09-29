import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Delete View'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Delete View',
  value: 'Delete View',
  action: 'Delete view',
  description:
    'Delete views from data tables\r\n\r\nAPI reference documentation: [Delete view]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-view/delete)',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/bitable/v1/apps/{{$parameter["app_token"]}}/tables/{{$parameter["table_id"]}}/views/{{$parameter["view_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
