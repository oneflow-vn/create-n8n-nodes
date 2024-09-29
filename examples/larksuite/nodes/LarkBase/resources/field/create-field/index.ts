import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Create Field'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Create Field',
  value: 'Create Field',
  action: 'Create Field',
  description:
    'Create a field\r\n\r\nAPI reference documentation: [Create Field]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-field/create)',
  routing: {
    request: {
      method: 'POST',
      url: '=/bitable/v1/apps/{{$parameter["app_token"]}}/tables/{{$parameter["table_id"]}}/fields',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
