import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain Apps Information'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain Apps Information',
  value: 'Obtain Apps Information',
  action: 'Obtain apps information',
  description:
    'Obtains basic information of an app based on the app_id.\r\n\r\nAPI reference documentation: [Obtain apps information]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/application-v6/application/get)',
  routing: {
    request: {
      method: 'GET',
      url: '=/application/v6/applications/{{$parameter["app_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
