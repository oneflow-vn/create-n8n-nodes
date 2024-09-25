import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Batch query attendance flow record'

const rawOption: INodePropertyOptions = {
  name: 'Batch query attendance flow record',
  value: 'Batch query attendance flow record',
  action: 'Batch query attendance flow record',
  routing: {
    request: {
      method: 'POST',
      url: '=/attendance/v1/user_flows/query',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
