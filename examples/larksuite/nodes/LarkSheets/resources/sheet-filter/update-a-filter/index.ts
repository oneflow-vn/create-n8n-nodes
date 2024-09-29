import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Update A Filter'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Update A Filter',
  value: 'Update A Filter',
  action: 'Update a filter',
  description:
    '::: note\nFor parameter values, see [Filter guide]({{document_base_url}}/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter/filter-user-guide)\n:::\nThis API is used to update column filter conditions in the sheet range.\r\n\r\nAPI reference documentation: [Update a filter]({{document_base_url}}/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter/update)',
  routing: {
    request: {
      method: 'PUT',
      url: '=/sheets/v3/spreadsheets/{{$parameter["spreadsheet_token"]}}/sheets/{{$parameter["sheet_id"]}}/filter',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
