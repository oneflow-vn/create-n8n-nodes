import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Approval Task AddSign'

const rawOption: INodePropertyOptions = {
  name: 'Approval Task AddSign',
  value: 'Approval Task AddSign',
  action: 'Approval Task AddSign',
  routing: {
    request: {
      method: 'POST',
      url: '=/approval/v4/instances/add_sign',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
