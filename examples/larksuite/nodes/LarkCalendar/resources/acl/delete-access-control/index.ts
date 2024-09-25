import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Delete access control'

const rawOption: INodePropertyOptions = {
  name: 'Delete access control',
  value: 'Delete access control',
  action: 'Delete access control',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/calendar/v4/calendars/{{$parameter["calendar_id"]}}/acls/{{$parameter["acl_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
