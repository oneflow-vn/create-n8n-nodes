import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name =
  'Delete a member who can send emails to mailing list addresses'

const rawOption: INodePropertyOptions = {
  name: 'Delete a member who can send emails to mailing list addresses',
  value: 'Delete a member who can send emails to mailing list addresses',
  action: 'Delete a member who can send emails to mailing list addresses',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/mail/v1/mailgroups/{{$parameter["mailgroup_id"]}}/permission_members/{{$parameter["permission_member_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
