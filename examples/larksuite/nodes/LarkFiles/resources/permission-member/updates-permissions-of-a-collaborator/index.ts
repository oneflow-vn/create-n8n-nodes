import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Updates permissions of a collaborator'

const rawOption: INodePropertyOptions = {
  name: 'Updates permissions of a collaborator',
  value: 'Updates permissions of a collaborator',
  action: 'Updates permissions of a collaborator',
  routing: {
    request: {
      method: 'PUT',
      url: '=/drive/v1/permissions/{{$parameter["token"]}}/members/{{$parameter["member_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
