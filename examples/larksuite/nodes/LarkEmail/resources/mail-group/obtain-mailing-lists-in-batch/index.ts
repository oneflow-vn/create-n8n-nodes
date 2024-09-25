import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain mailing lists in batch'

const rawOption: INodePropertyOptions = {
  name: 'Obtain mailing lists in batch',
  value: 'Obtain mailing lists in batch',
  action: 'Obtain mailing lists in batch',
  routing: {
    request: {
      method: 'GET',
      url: '=/mail/v1/mailgroups',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
