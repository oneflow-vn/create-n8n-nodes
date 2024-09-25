import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain a public mailbox'

const rawOption: INodePropertyOptions = {
  name: 'Obtain a public mailbox',
  value: 'Obtain a public mailbox',
  action: 'Obtain a public mailbox',
  routing: {
    request: {
      method: 'GET',
      url: '=/mail/v1/public_mailboxes/{{$parameter["public_mailbox_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
