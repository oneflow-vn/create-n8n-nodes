import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Generate Caldav Configuration'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Generate Caldav Configuration',
  value: 'Generate Caldav Configuration',
  action: 'Generate CalDAV configuration',
  description:
    'This API is used to generate a CalDAV account and password for the user to sync Lark calendar information to calendars on the local device.\r\n\r\nAPI reference documentation: [Generate CalDAV configuration]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/setting/generate_caldav_conf)',
  routing: {
    request: {
      method: 'POST',
      url: '=/calendar/v4/settings/generate_caldav_conf',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
