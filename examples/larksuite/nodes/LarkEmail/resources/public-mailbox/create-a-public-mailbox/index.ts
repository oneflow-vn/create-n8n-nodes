import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Create a public mailbox'

const rawOption: INodePropertyOptions = {
  name: 'Create a public mailbox',
  value: 'Create a public mailbox',
  action: 'Create a public mailbox',
  routing: {
    request: {
      method: 'POST',
      url: '=/mail/v1/public_mailboxes',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
