import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Update Field'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Update Field',
  value: 'Update Field',
  action: 'Update Field',
  description:
    'Update a field\r\n\r\nAPI reference documentation: [Update Field]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-field/update)',
  routing: {
    request: {
      method: 'PUT',
      url: '=/bitable/v1/apps/{{$parameter["app_token"]}}/tables/{{$parameter["table_id"]}}/fields/{{$parameter["field_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
