import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Delete a public mailbox alias'

const rawOption: INodePropertyOptions = {
  name: 'Delete a public mailbox alias',
  value: 'Delete a public mailbox alias',
  action: 'Delete a public mailbox alias',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/mail/v1/public_mailboxes/{{$parameter["public_mailbox_id"]}}/aliases/{{$parameter["alias_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
