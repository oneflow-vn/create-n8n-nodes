import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain all public mailbox aliases'

const rawOption: INodePropertyOptions = {
  name: 'Obtain all public mailbox aliases',
  value: 'Obtain all public mailbox aliases',
  action: 'Obtain all public mailbox aliases',
  routing: {
    request: {
      method: 'GET',
      url: '=/mail/v1/public_mailboxes/{{$parameter["public_mailbox_id"]}}/aliases',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
