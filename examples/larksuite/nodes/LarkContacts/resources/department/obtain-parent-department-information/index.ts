import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain parent department information'

const rawOption: INodePropertyOptions = {
  name: 'Obtain parent department information',
  value: 'Obtain parent department information',
  action: 'Obtain parent department information',
  routing: {
    request: {
      method: 'GET',
      url: '=/contact/v3/departments/parent',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
