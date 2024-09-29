import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Upload A Material In Blocks Preuploading'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Upload A Material In Blocks Preuploading',
  value: 'Upload A Material In Blocks Preuploading',
  action: 'Upload a material in blocks (Pre­uploading)',
  description:
    'Sends an initialization request to obtain an upload transaction ID and a split policy. The current policy is to split a file into 4 MB fixed-length blocks.\r\n\r\nAPI reference documentation: [Upload a material in blocks (Pre­uploading)]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/upload_prepare)',
  routing: {
    request: {
      method: 'POST',
      url: '=/drive/v1/medias/upload_prepare',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
