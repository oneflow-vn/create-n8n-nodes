import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Task list from user perspective'

const rawOption: INodePropertyOptions = {
  name: 'Task list from user perspective',
  value: 'Task list from user perspective',
  action: 'Task list from user perspective',
  routing: {
    request: {
      method: 'GET',
      url: '=/approval/v4/tasks/query',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
