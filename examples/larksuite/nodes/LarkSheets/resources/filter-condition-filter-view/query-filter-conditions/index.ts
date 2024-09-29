import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Query Filter Conditions'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Query Filter Conditions',
  value: 'Query Filter Conditions',
  action: 'Query filter conditions',
  description:
    '::: note\nFor filter condition explanations, see [User guide for using filter conditions in the filter view]({{document_base_url}}/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view-condition/filter-view-condition-user-guide)\n:::\nThis API is used to query all filter conditions of a filter view. All filter conditions in the range of the filter view are returned.\r\n\r\nAPI reference documentation: [Query filter conditions]({{document_base_url}}/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view-condition/query)',
  routing: {
    request: {
      method: 'GET',
      url: '=/sheets/v3/spreadsheets/{{$parameter["spreadsheet_token"]}}/sheets/{{$parameter["sheet_id"]}}/filter_views/{{$parameter["filter_view_id"]}}/conditions/query',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
