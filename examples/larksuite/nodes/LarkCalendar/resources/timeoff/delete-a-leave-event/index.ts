import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Delete A Leave Event'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Delete A Leave Event',
  value: 'Delete A Leave Event',
  action: 'Delete a leave event',
  description:
    'Deletes a specified leave event. After a leave event is deleted, the leave information disappears from the personal signature page of the user.\nAn app can only delete leave events created by the app.\r\n\r\nAPI reference documentation: [Delete a leave event]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/timeoff_event/delete)',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/calendar/v4/timeoff_events/{{$parameter["timeoff_event_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
