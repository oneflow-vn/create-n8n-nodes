import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Delete A Floating Image'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Delete A Floating Image',
  value: 'Delete A Floating Image',
  action: 'Delete a floating image',
  description:
    'This API is used to delete the floating image with the specified float_image_id.\r\n\r\nAPI reference documentation: [Delete a floating image]({{document_base_url}}/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-float_image/delete)',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/sheets/v3/spreadsheets/{{$parameter["spreadsheet_token"]}}/sheets/{{$parameter["sheet_id"]}}/float_images/{{$parameter["float_image_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
