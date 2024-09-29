import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Query Availability'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Query Availability',
  value: 'Query Availability',
  action: 'Query availability',
  description:
    "Queries the availability information of a user's primary calendar or a room.\r\n\r\nAPI reference documentation: [Query availability]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/freebusy/list)",
  routing: {
    request: {
      method: 'POST',
      url: '=/calendar/v4/freebusy/list',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
