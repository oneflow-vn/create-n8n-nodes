/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-description-boolean-without-whether */
/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */

import { INodePropertyOptions } from 'n8n-workflow'

// @ts-ignore
import * as helpers from '../../../helpers'

import { properties as rawProperties } from './properties'
import { runHooks } from './hooks'

export const name = 'Update Common Settings Of A Document'

const rawOption: INodePropertyOptions = {
  name: 'Update Common Settings Of A Document',
  value: 'Update Common Settings Of A Document',
  action:
    'Update Common Settings Of A Document Docs File Management Permission Permission Public',
  description:
    'This API is used to update the common settings of a document based on a filetoken. API reference documentation: [Update common settings of a document]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/permission-public/patch)',
  routing: {
    request: {
      method: 'PATCH',
      url: '=/drive/v1/permissions/{{$parameter["token"]}}/public',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
