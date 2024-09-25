import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Query the workforce type'

const rawOption: INodePropertyOptions = {
  name: 'Query the workforce type',
  value: 'Query the workforce type',
  action: 'Query the workforce type',
  routing: {
    request: {
      method: 'GET',
      url: '=/contact/v3/employee_type_enums',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
