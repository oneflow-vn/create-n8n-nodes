import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Create access control'

const rawOption: INodePropertyOptions = {
  name: 'Create access control',
  value: 'Create access control',
  action: 'Create access control',
  routing: {
    request: {
      method: 'POST',
      url: '=/calendar/v4/calendars/{{$parameter["calendar_id"]}}/acls',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
