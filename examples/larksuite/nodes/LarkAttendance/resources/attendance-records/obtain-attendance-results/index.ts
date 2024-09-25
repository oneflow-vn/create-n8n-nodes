import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain attendance results'

const rawOption: INodePropertyOptions = {
  name: 'Obtain attendance results',
  value: 'Obtain attendance results',
  action: 'Obtain attendance results',
  routing: {
    request: {
      method: 'POST',
      url: '=/attendance/v1/user_tasks/query',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
