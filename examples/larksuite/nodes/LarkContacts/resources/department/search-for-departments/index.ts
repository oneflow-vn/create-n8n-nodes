import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Search for departments'

const rawOption: INodePropertyOptions = {
  name: 'Search for departments',
  value: 'Search for departments',
  action: 'Search for departments',
  routing: {
    request: {
      method: 'POST',
      url: '=/contact/v3/departments/search',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
