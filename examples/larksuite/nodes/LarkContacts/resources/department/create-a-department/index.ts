import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Create a department'

const rawOption: INodePropertyOptions = {
  name: 'Create a department',
  value: 'Create a department',
  action: 'Create a department',
  routing: {
    request: {
      method: 'POST',
      url: '=/contact/v3/departments',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
