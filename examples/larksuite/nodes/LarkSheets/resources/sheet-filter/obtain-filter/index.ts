import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain Filter'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain Filter',
  value: 'Obtain Filter',
  action: 'Obtain filter',
  description:
    'This API is used to obtain the filter details for a sheet.\r\n\r\nAPI reference documentation: [Obtain filter]({{document_base_url}}/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter/get)',
  routing: {
    request: {
      method: 'GET',
      url: '=/sheets/v3/spreadsheets/{{$parameter["spreadsheet_token"]}}/sheets/{{$parameter["sheet_id"]}}/filter',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
