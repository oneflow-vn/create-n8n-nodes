import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name =
  'Obtain a member who can send emails to mailing list addresses'

const rawOption: INodePropertyOptions = {
  name: 'Obtain a member who can send emails to mailing list addresses',
  value: 'Obtain a member who can send emails to mailing list addresses',
  action: 'Obtain a member who can send emails to mailing list addresses',
  routing: {
    request: {
      method: 'GET',
      url: '=/mail/v1/mailgroups/{{$parameter["mailgroup_id"]}}/permission_members/{{$parameter["permission_member_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
