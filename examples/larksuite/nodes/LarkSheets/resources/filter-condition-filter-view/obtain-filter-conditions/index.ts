import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain Filter Conditions'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain Filter Conditions',
  value: 'Obtain Filter Conditions',
  action: 'Obtain filter conditions',
  description:
    '::: note\nFor filter condition explanations, see [User guide for using filter conditions in the filter view]({{document_base_url}}/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view-condition/filter-view-condition-user-guide)\n:::\nThis API is used to obtain the filter conditions of a specified column in the filter view.\r\n\r\nAPI reference documentation: [Obtain filter conditions]({{document_base_url}}/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view-condition/get)',
  routing: {
    request: {
      method: 'GET',
      url: '=/sheets/v3/spreadsheets/{{$parameter["spreadsheet_token"]}}/sheets/{{$parameter["sheet_id"]}}/filter_views/{{$parameter["filter_view_id"]}}/conditions/{{$parameter["condition_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
