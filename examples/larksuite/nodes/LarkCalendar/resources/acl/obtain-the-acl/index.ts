import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain the ACL'

const rawOption: INodePropertyOptions = {
  name: 'Obtain the ACL',
  value: 'Obtain the ACL',
  action: 'Obtain the ACL',
  routing: {
    request: {
      method: 'GET',
      url: '=/calendar/v4/calendars/{{$parameter["calendar_id"]}}/acls',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
