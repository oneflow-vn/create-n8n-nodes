import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Create Filter View'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Create Filter View',
  value: 'Create Filter View',
  action: 'Create filter view',
  description:
    "::: note\nFor range settings, see: [User guide for using filter conditions in the filter view]({{document_base_url}}/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view-condition/filter-view-condition-user-guide)\n:::\nThis API is used to create a filter view based on passed in parameters. The ID and name fields are optional and default values are generated if none are provided. The range field is required. IDs are 10 characters long and composed of numbers and upper and lowercase English letters. Names can't exceed 100 characters. A single sheet can have up to 150 filter views.\r\n\r\nAPI reference documentation: [Create filter view]({{document_base_url}}/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view/create)",
  routing: {
    request: {
      method: 'POST',
      url: '=/sheets/v3/spreadsheets/{{$parameter["spreadsheet_token"]}}/sheets/{{$parameter["sheet_id"]}}/filter_views',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
