import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Add a workforce type'

const rawOption: INodePropertyOptions = {
  name: 'Add a workforce type',
  value: 'Add a workforce type',
  action: 'Add a workforce type',
  routing: {
    request: {
      method: 'POST',
      url: '=/contact/v3/employee_type_enums',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
