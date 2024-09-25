import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Subscribe to changes in calendar access control'

const rawOption: INodePropertyOptions = {
  name: 'Subscribe to changes in calendar access control',
  value: 'Subscribe to changes in calendar access control',
  action: 'Subscribe to changes in calendar access control\n',
  routing: {
    request: {
      method: 'POST',
      url: '=/calendar/v4/calendars/{{$parameter["calendar_id"]}}/acls/subscription',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
