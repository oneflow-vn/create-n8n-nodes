import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Update Filter Conditions'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Update Filter Conditions',
  value: 'Update Filter Conditions',
  action: 'Update filter conditions',
  description:
    '::: note\nFor filter condition parameters, see [User guide for using filter conditions in the filter view]({{document_base_url}}/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view-condition/filter-view-condition-user-guide)\n:::\nThis API is used to update filter conditions for a column in the range of a filter view. The condition ID is the letter designation of the column.\r\n\r\nAPI reference documentation: [Update filter conditions]({{document_base_url}}/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view-condition/update)',
  routing: {
    request: {
      method: 'PUT',
      url: '=/sheets/v3/spreadsheets/{{$parameter["spreadsheet_token"]}}/sheets/{{$parameter["sheet_id"]}}/filter_views/{{$parameter["filter_view_id"]}}/conditions/{{$parameter["condition_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
