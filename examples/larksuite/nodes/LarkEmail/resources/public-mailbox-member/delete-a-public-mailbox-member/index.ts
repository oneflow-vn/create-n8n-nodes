import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Delete a public mailbox member'

const rawOption: INodePropertyOptions = {
  name: 'Delete a public mailbox member',
  value: 'Delete a public mailbox member',
  action: 'Delete a public mailbox member',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/mail/v1/public_mailboxes/{{$parameter["public_mailbox_id"]}}/members/{{$parameter["member_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
