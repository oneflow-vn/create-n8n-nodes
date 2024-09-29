import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Batch Delete Table'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Batch Delete Table',
  value: 'Batch Delete Table',
  action: 'Batch Delete Table',
  description:
    'Batch Delete Table\r\n\r\nAPI reference documentation: [Batch Delete Table]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table/batch_delete)',
  routing: {
    request: {
      method: 'POST',
      url: '=/bitable/v1/apps/{{$parameter["app_token"]}}/tables/batch_delete',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
