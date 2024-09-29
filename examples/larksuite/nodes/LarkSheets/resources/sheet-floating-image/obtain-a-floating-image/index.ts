import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain A Floating Image'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain A Floating Image',
  value: 'Obtain A Floating Image',
  action: 'Obtain a floating image',
  description:
    '::: note\nFor information about floating images, see [Floating image guide]({{document_base_url}}/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-float_image/float-image-user-guide)\n:::\nThis API is used to obtain floating image information based on a float_image_id.\r\n\r\nAPI reference documentation: [Obtain a floating image]({{document_base_url}}/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-float_image/get)',
  routing: {
    request: {
      method: 'GET',
      url: '=/sheets/v3/spreadsheets/{{$parameter["spreadsheet_token"]}}/sheets/{{$parameter["sheet_id"]}}/float_images/{{$parameter["float_image_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
