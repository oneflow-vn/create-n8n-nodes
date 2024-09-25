import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Update a public mailbox'

const rawOption: INodePropertyOptions = {
  name: 'Update a public mailbox',
  value: 'Update a public mailbox',
  action: 'Update a public mailbox',
  routing: {
    request: {
      method: 'PUT',
      url: '=/mail/v1/public_mailboxes/{{$parameter["public_mailbox_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
