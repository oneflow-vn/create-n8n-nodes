import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain public mailbox members in batch'

const rawOption: INodePropertyOptions = {
  name: 'Obtain public mailbox members in batch',
  value: 'Obtain public mailbox members in batch',
  action: 'Obtain public mailbox members in batch',
  routing: {
    request: {
      method: 'GET',
      url: '=/mail/v1/public_mailboxes/{{$parameter["public_mailbox_id"]}}/members',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
