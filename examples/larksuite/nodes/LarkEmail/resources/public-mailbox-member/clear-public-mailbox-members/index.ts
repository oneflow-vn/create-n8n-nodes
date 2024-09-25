import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Clear public mailbox members'

const rawOption: INodePropertyOptions = {
  name: 'Clear public mailbox members',
  value: 'Clear public mailbox members',
  action: 'Clear public mailbox members',
  routing: {
    request: {
      method: 'POST',
      url: '=/mail/v1/public_mailboxes/{{$parameter["public_mailbox_id"]}}/members/clear',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
