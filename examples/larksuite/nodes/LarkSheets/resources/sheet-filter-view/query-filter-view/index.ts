import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Query Filter View'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Query Filter View',
  value: 'Query Filter View',
  action: 'Query filter view',
  description:
    'This API is used to query the basic information of all filter views in a sheet, including their IDs, names, and ranges.\r\n\r\nAPI reference documentation: [Query filter view]({{document_base_url}}/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-filter_view/query)',
  routing: {
    request: {
      method: 'GET',
      url: '=/sheets/v3/spreadsheets/{{$parameter["spreadsheet_token"]}}/sheets/{{$parameter["sheet_id"]}}/filter_views/query',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
