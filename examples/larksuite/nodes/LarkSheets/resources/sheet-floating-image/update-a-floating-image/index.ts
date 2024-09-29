import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Update A Floating Image'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Update A Floating Image',
  value: 'Update A Floating Image',
  action: 'Update a floating image',
  description:
    '::: note\nFor information about how to update a floating image, see [Floating image guide]({{document_base_url}}/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-float_image/float-image-user-guide).\n:::\nThis API is used to update the position and size parameters of an existing floating image, including range, width, height, offset_x, and offset_y. This operation cannot update float_image_id or float_image_token.\r\n\r\nAPI reference documentation: [Update a floating image]({{document_base_url}}/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-float_image/patch)',
  routing: {
    request: {
      method: 'PATCH',
      url: '=/sheets/v3/spreadsheets/{{$parameter["spreadsheet_token"]}}/sheets/{{$parameter["sheet_id"]}}/float_images/{{$parameter["float_image_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
