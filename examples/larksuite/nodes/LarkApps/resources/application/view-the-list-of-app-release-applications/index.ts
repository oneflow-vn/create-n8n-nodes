import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'View The List Of App Release Applications'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'View The List Of App Release Applications',
  value: 'View The List Of App Release Applications',
  action: 'View the list of app release applications',
  description:
    'Displays the list of all custom apps pending review for this company.\r\n\r\nAPI reference documentation: [View the list of app release applications]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/application-v6/application/underauditlist)',
  routing: {
    request: {
      method: 'GET',
      url: '=/application/v6/applications/underauditlist',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
