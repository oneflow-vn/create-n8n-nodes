import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Create shifts'

const rawOption: INodePropertyOptions = {
  name: 'Create shifts',
  value: 'Create shifts',
  action: 'Create shifts',
  routing: {
    request: {
      method: 'POST',
      url: '=/attendance/v1/shifts',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
