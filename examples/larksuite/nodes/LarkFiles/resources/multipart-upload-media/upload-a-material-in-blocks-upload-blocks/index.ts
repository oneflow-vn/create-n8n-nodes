import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Upload A Material In Blocks Upload Blocks'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Upload A Material In Blocks Upload Blocks',
  value: 'Upload A Material In Blocks Upload Blocks',
  action: 'Upload a material in blocks (Upload blocks)',
  description:
    'Uploads blocks of a specified file.\r\n\r\nAPI reference documentation: [Upload a material in blocks (Upload blocks)]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/upload_part)',
  routing: {
    request: {
      method: 'POST',
      url: '=/drive/v1/medias/upload_part',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
