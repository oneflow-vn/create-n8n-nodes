import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Approval Preview'

const rawOption: INodePropertyOptions = {
  name: 'Approval Preview',
  value: 'Approval Preview',
  action: 'Approval Preview',
  routing: {
    request: {
      method: 'POST',
      url: '=/approval/v4/instances/preview',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
