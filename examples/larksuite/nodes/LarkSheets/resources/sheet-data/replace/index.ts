import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Replace'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Replace',
  value: 'Replace',
  action: 'Replace',
  description:
    'Find data that matches specified conditions in a certain range of the sheet, replace the values, and return the location of the successfully replaced cell. You can replace up to 5,000 cells at a time. If the number of matching cells exceeds the limit, narrow the range before the action. The range, find, and replacement fields are required in the request body.\r\n\r\nAPI reference documentation: [Replace]({{document_base_url}}/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet/replace)',
  routing: {
    request: {
      method: 'POST',
      url: '=/sheets/v3/spreadsheets/{{$parameter["spreadsheet_token"]}}/sheets/{{$parameter["sheet_id"]}}/replace',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
