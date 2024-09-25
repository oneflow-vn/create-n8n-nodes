import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Import attendance flow record'

const rawOption: INodePropertyOptions = {
  name: 'Import attendance flow record',
  value: 'Import attendance flow record',
  action: 'Import attendance flow record',
  routing: {
    request: {
      method: 'POST',
      url: '=/attendance/v1/user_flows/batch_create',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
