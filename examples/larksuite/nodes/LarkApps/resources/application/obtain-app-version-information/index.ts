import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain App Version Information'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain App Version Information',
  value: 'Obtain App Version Information',
  action: 'Obtain app version information',
  description:
    'Obtains the version information of an app based on app_id and version_id.\r\n\r\nAPI reference documentation: [Obtain app version information]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/application-v6/application-app_version/get)',
  routing: {
    request: {
      method: 'GET',
      url: '=/application/v6/applications/{{$parameter["app_id"]}}/app_versions/{{$parameter["version_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
