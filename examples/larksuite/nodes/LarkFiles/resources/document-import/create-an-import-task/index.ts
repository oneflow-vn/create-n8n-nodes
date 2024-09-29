import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Create An Import Task'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Create An Import Task',
  value: 'Create An Import Task',
  action: 'Create an import task',
  description:
    'Creates an import task. You can import files of the doc, sheet, and bitable types. For more information, see [User guide on importing files]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/import_task/import-user-guide).\r\n\r\nAPI reference documentation: [Create an import task]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/import_task/create)',
  routing: {
    request: {
      method: 'POST',
      url: '=/drive/v1/import_tasks',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
