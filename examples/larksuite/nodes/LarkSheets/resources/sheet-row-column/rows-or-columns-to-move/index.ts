import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Rows Or Columns To Move'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Rows Or Columns To Move',
  value: 'Rows Or Columns To Move',
  action: 'Rows or columns to move',
  description:
    'This API is used to move rows and columns. After rows and columns are moved to a target location, the rows and columns already at the target location are shifted right or down.\r\n\r\nAPI reference documentation: [Rows or columns to move]({{document_base_url}}/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet/move_dimension)',
  routing: {
    request: {
      method: 'POST',
      url: '=/sheets/v3/spreadsheets/{{$parameter["spreadsheet_token"]}}/sheets/{{$parameter["sheet_id"]}}/move_dimension',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
