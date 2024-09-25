import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Query the list of members in a user group'

const rawOption: INodePropertyOptions = {
  name: 'Query the list of members in a user group',
  value: 'Query the list of members in a user group',
  action: 'Query the list of members in a user group',
  routing: {
    request: {
      method: 'GET',
      url: '=/contact/v3/group/{{$parameter["group_id"]}}/member/simplelist',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
