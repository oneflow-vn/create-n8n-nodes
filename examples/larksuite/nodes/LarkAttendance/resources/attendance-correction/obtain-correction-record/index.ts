import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain correction record'

const rawOption: INodePropertyOptions = {
  name: 'Obtain correction record',
  value: 'Obtain correction record',
  action: 'Obtain correction record',
  routing: {
    request: {
      method: 'POST',
      url: '=/attendance/v1/user_task_remedys/query',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
