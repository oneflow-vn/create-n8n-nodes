import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Create a mailing list'

const rawOption: INodePropertyOptions = {
  name: 'Create a mailing list',
  value: 'Create a mailing list',
  action: 'Create a mailing list',
  routing: {
    request: {
      method: 'POST',
      url: '=/mail/v1/mailgroups',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
