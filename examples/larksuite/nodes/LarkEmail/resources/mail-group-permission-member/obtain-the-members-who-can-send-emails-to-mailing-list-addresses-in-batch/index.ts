import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name =
  'Obtain the members who can send emails to mailing list addresses in batch'

const rawOption: INodePropertyOptions = {
  name: 'Obtain the members who can send emails to mailing list addresses in batch',
  value:
    'Obtain the members who can send emails to mailing list addresses in batch',
  action:
    'Obtain the members who can send emails to mailing list addresses in batch',
  routing: {
    request: {
      method: 'GET',
      url: '=/mail/v1/mailgroups/{{$parameter["mailgroup_id"]}}/permission_members',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
