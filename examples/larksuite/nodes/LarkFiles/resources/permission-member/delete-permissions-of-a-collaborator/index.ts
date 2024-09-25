import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Delete permissions of a collaborator'

const rawOption: INodePropertyOptions = {
  name: 'Delete permissions of a collaborator',
  value: 'Delete permissions of a collaborator',
  action: 'Delete permissions of a collaborator',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/drive/v1/permissions/{{$parameter["token"]}}/members/{{$parameter["member_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
