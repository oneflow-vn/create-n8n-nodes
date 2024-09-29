import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain Filter View'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain Filter View',
  value: 'Obtain Filter View',
  action: 'Obtain filter view',
  description:
    'This API is used to obtain the name and range of a specified filter view ID.\r\n\r\nAPI reference documentation: [Obtain filter view]({{document_base_url}}/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view/get)',
  routing: {
    request: {
      method: 'GET',
      url: '=/sheets/v3/spreadsheets/{{$parameter["spreadsheet_token"]}}/sheets/{{$parameter["sheet_id"]}}/filter_views/{{$parameter["filter_view_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
