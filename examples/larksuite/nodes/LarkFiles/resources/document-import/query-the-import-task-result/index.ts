import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Query The Import Task Result'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Query The Import Task Result',
  value: 'Query The Import Task Result',
  action: 'Query the import task result',
  description:
    'Queries the result of an import task based on the ticket returned when the task was created.\r\n\r\nAPI reference documentation: [Query the import task result]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/import_task/get)',
  routing: {
    request: {
      method: 'GET',
      url: '=/drive/v1/import_tasks/{{$parameter["ticket"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
