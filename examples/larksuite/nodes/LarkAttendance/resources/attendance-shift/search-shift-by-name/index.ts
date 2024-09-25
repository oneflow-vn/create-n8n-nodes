import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Search shift by name'

const rawOption: INodePropertyOptions = {
  name: 'Search shift by name',
  value: 'Search shift by name',
  action: 'Search shift by name',
  routing: {
    request: {
      method: 'POST',
      url: '=/attendance/v1/shifts/query',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
