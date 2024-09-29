import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Create A Leave Event'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Create A Leave Event',
  value: 'Create A Leave Event',
  action: 'Create a leave event',
  description:
    'Creates a leave event for a specified user. The event can be a common leave event or an all-day event.\nAfter a leave event is created, the leave information will be displayed in the personal signature page within a specified period of time.\r\n\r\nAPI reference documentation: [Create a leave event]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/timeoff_event/create)',
  routing: {
    request: {
      method: 'POST',
      url: '=/calendar/v4/timeoff_events',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
