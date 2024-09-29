import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Create Spreadsheet'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Create Spreadsheet',
  value: 'Create Spreadsheet',
  action: 'Create spreadsheet',
  description:
    'Use this API to create an online spreadsheet under the specified directory.\r\n\r\nAPI reference documentation: [Create spreadsheet]({{document_base_url}}/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet/create)',
  routing: {
    request: {
      method: 'POST',
      url: '=/sheets/v3/spreadsheets',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
