import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Create a public mailbox alias'

const rawOption: INodePropertyOptions = {
  name: 'Create a public mailbox alias',
  value: 'Create a public mailbox alias',
  action: 'Create a public mailbox alias',
  routing: {
    request: {
      method: 'POST',
      url: '=/mail/v1/public_mailboxes/{{$parameter["public_mailbox_id"]}}/aliases',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
