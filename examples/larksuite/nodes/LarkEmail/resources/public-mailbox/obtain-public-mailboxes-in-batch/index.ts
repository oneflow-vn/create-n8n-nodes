import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain public mailboxes in batch'

const rawOption: INodePropertyOptions = {
  name: 'Obtain public mailboxes in batch',
  value: 'Obtain public mailboxes in batch',
  action: 'Obtain public mailboxes in batch',
  routing: {
    request: {
      method: 'GET',
      url: '=/mail/v1/public_mailboxes',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
