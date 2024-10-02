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

export const name = 'Upload A File In Blocks Pre Uploading'

const rawOption: INodePropertyOptions = {
  name: 'Upload A File In Blocks Pre Uploading',
  value: 'Upload A File In Blocks Pre Uploading',
  action:
    'Upload A File In Blocks Pre Uploading Docs File Management File Multipart Upload Files',
  description:
    'Sends an initialization request to obtain an upload transaction ID and a split policy. The current policy is to split a file into 4 MB fixed-length blocks. API reference documentation: [Upload a file in blocks (Pre­uploading)]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file/upload_prepare)',
  routing: {
    request: {
      method: 'POST',
      url: '=/drive/v1/files/upload_prepare',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
