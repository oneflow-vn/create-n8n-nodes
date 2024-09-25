import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain public mailbox member information'

const rawOption: INodePropertyOptions = {
  name: 'Obtain public mailbox member information',
  value: 'Obtain public mailbox member information',
  action: 'Obtain public mailbox member information',
  routing: {
    request: {
      method: 'GET',
      url: '=/mail/v1/public_mailboxes/{{$parameter["public_mailbox_id"]}}/members/{{$parameter["member_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
