import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain units in batches'

const rawOption: INodePropertyOptions = {
  name: 'Obtain units in batches',
  value: 'Obtain units in batches',
  action: 'Obtain units in batches',
  routing: {
    request: {
      method: 'GET',
      url: '=/contact/v3/unit',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
