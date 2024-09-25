import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Add members to a user group'

const rawOption: INodePropertyOptions = {
  name: 'Add members to a user group',
  value: 'Add members to a user group',
  action: 'Add members to a user group',
  routing: {
    request: {
      method: 'POST',
      url: '=/contact/v3/group/{{$parameter["group_id"]}}/member/add',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
