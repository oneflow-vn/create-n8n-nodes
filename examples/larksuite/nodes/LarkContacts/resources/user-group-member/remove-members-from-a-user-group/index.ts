import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Remove members from a user group'

const rawOption: INodePropertyOptions = {
  name: 'Remove members from a user group',
  value: 'Remove members from a user group',
  action: 'Remove members from a user group',
  routing: {
    request: {
      method: 'POST',
      url: '=/contact/v3/group/{{$parameter["group_id"]}}/member/remove',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
