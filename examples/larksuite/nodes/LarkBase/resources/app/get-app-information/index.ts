import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Get App Information'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Get App Information',
  value: 'Get App Information',
  action: 'Get App Information',
  description:
    'Get App information through app_token\r\n\r\nAPI reference documentation: [Get App Information]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app/get)',
  routing: {
    request: {
      method: 'GET',
      url: '=/bitable/v1/apps/{{$parameter["app_token"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
