import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain company information'

const rawOption: INodePropertyOptions = {
  name: 'Obtain company information',
  value: 'Obtain company information',
  action: 'Obtain company information',
  routing: {
    request: {
      method: 'GET',
      url: '=/tenant/v2/tenant/query',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
