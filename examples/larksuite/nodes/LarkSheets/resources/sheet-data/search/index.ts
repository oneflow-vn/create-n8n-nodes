import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Search'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Search',
  value: 'Search',
  action: 'Search',
  description:
    'Search cell locations that match specified conditions in a certain range of the sheet. The range and find fields are required in the request body.\r\n\r\nAPI reference documentation: [Search]({{document_base_url}}/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet/find)',
  routing: {
    request: {
      method: 'POST',
      url: '=/sheets/v3/spreadsheets/{{$parameter["spreadsheet_token"]}}/sheets/{{$parameter["sheet_id"]}}/find',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
