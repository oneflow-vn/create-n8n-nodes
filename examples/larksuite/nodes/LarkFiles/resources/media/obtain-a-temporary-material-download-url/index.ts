import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain A Temporary Material Download Url'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain A Temporary Material Download Url',
  value: 'Obtain A Temporary Material Download Url',
  action: 'Obtain a temporary material download URL',
  description:
    'Obtain the temporary download URL of a material based on a file_token. The URL is valid for 24 hours.\r\n\r\nAPI reference documentation: [Obtain a temporary material download URL]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/media/batch_get_tmp_download_url)',
  routing: {
    request: {
      method: 'GET',
      url: '=/drive/v1/medias/batch_get_tmp_download_url',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
