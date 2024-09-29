import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Delete Filter View'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Delete Filter View',
  value: 'Delete Filter View',
  action: 'Delete filter view',
  description:
    'This API is used to delete the filter view corresponding to the specified ID.\r\n\r\nAPI reference documentation: [Delete filter view]({{document_base_url}}/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view/delete)',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/sheets/v3/spreadsheets/{{$parameter["spreadsheet_token"]}}/sheets/{{$parameter["sheet_id"]}}/filter_views/{{$parameter["filter_view_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
