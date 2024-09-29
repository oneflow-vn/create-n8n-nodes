import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain Statistics Of A File'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain Statistics Of A File',
  value: 'Obtain Statistics Of A File',
  action: 'Obtain statistics of a file',
  description:
    'This API is used to obtain statistics of a file, including the number of unique visitors (UVs), the number of page views (PVs), and the number of likes.\r\n\r\nAPI reference documentation: [Obtain statistics of a file]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-statistics/get)',
  routing: {
    request: {
      method: 'GET',
      url: '=/drive/v1/files/{{$parameter["file_token"]}}/statistics',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
