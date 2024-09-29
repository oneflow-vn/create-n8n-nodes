import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Update App Category Information'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Update App Category Information',
  value: 'Update App Category Information',
  action: 'Update app category information',
  description:
    'Updates app category information (Category changes can affect app sorting in Workplace, so proceed with caution).\r\n\r\nAPI reference documentation: [Update app category information]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/application-v6/application/patch)',
  routing: {
    request: {
      method: 'PATCH',
      url: '=/application/v6/applications/{{$parameter["app_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
