import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Create a public mailbox member'

const rawOption: INodePropertyOptions = {
  name: 'Create a public mailbox member',
  value: 'Create a public mailbox member',
  action: 'Create a public mailbox member',
  routing: {
    request: {
      method: 'POST',
      url: '=/mail/v1/public_mailboxes/{{$parameter["public_mailbox_id"]}}/members',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
