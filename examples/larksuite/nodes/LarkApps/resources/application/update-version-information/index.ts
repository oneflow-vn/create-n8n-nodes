import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Update Version Information'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Update Version Information',
  value: 'Update Version Information',
  action: 'Update version information',
  description:
    'Updates the app version review status.\r\n\r\nAPI reference documentation: [Update version information]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/application-v6/application-app_version/patch)',
  routing: {
    request: {
      method: 'PATCH',
      url: '=/application/v6/applications/{{$parameter["app_id"]}}/app_versions/{{$parameter["version_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
