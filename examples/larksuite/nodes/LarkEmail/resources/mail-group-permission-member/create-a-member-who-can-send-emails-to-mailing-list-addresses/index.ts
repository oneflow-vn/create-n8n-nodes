import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name =
  'Create a member who can send emails to mailing list addresses'

const rawOption: INodePropertyOptions = {
  name: 'Create a member who can send emails to mailing list addresses',
  value: 'Create a member who can send emails to mailing list addresses',
  action: 'Create a member who can send emails to mailing list addresses',
  routing: {
    request: {
      method: 'POST',
      url: '=/mail/v1/mailgroups/{{$parameter["mailgroup_id"]}}/permission_members',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
