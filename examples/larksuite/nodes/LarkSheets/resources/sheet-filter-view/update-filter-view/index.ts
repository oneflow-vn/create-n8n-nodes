import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Update Filter View'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Update Filter View',
  value: 'Update Filter View',
  action: 'Update filter view',
  description:
    "::: note\nFor range settings, see: [User guide for using filter conditions in the filter view]({{document_base_url}}/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view-condition/filter-view-condition-user-guide)\n:::\nThis API is used to update the filter view name or range. The name can't exceed 100 characters and must be unique within the sheet. The range can't exceed the maximum range of the sheet.\r\n\r\nAPI reference documentation: [Update filter view]({{document_base_url}}/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view/patch)",
  routing: {
    request: {
      method: 'PATCH',
      url: '=/sheets/v3/spreadsheets/{{$parameter["spreadsheet_token"]}}/sheets/{{$parameter["sheet_id"]}}/filter_views/{{$parameter["filter_view_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
