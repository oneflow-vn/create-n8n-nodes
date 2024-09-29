import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Create A Floating Image'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Create A Floating Image',
  value: 'Create A Floating Image',
  action: 'Create a floating image',
  description:
    '::: note\nFor information about the settings of a floating image, see [Floating image guide]({{document_base_url}}/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-float_image/float-image-user-guide).\n:::\nThis API is used to create a floating image based on the parameters passed in. Float_image_token ([obtained after uploading an image to a spreadsheet]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/upload_all)) and range (only one cell) are required parameters. Float_image_id is optional, and a default ID is generated if this field is not specified. IDs are 10 characters long and composed of numbers (0-9) and upper and lowercase English letters. A spreadsheet cannot have duplicate images, and the total of floating images and cell images cannot exceed 4,000. The width and height specify the display width and height of an image, which are optional. If not specified, the image is displayed according to its actual width and height. offset_x and offset_y specify the offset of the image from the top-left corner of the cell where it is located. These two parameters are optional and default to 0.\r\n\r\nAPI reference documentation: [Create a floating image]({{document_base_url}}/ukTMukTMukTM/uUDN04SN0QjL1QDN/sheets-v3/spreadsheet-sheet-float_image/create)',
  routing: {
    request: {
      method: 'POST',
      url: '=/sheets/v3/spreadsheets/{{$parameter["spreadsheet_token"]}}/sheets/{{$parameter["sheet_id"]}}/float_images',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
