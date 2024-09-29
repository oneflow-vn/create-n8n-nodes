import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Delete Filter Conditions'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Delete Filter Conditions',
  value: 'Delete Filter Conditions',
  action: 'Delete filter conditions',
  description:
    'This API is used to delete filter conditions for a specified column in the range of a filter view.\r\n\r\nAPI reference documentation: [Delete filter conditions]({{document_base_url}}/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view-condition/delete)',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/sheets/v3/spreadsheets/{{$parameter["spreadsheet_token"]}}/sheets/{{$parameter["sheet_id"]}}/filter_views/{{$parameter["filter_view_id"]}}/conditions/{{$parameter["condition_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
