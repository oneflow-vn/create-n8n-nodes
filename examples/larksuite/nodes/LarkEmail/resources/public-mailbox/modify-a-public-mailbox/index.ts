import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Modify a public mailbox'

const rawOption: INodePropertyOptions = {
  name: 'Modify a public mailbox',
  value: 'Modify a public mailbox',
  action: 'Modify a public mailbox',
  routing: {
    request: {
      method: 'PATCH',
      url: '=/mail/v1/public_mailboxes/{{$parameter["public_mailbox_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
