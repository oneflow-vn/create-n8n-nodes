import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Update Common Settings Of A Document'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Update Common Settings Of A Document',
  value: 'Update Common Settings Of A Document',
  action: 'Update common settings of a document',
  description:
    'This API is used to update the common settings of a document based on a filetoken.\r\n\r\nAPI reference documentation: [Update common settings of a document]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/permission-public/patch)',
  routing: {
    request: {
      method: 'PATCH',
      url: '=/drive/v1/permissions/{{$parameter["token"]}}/public',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
