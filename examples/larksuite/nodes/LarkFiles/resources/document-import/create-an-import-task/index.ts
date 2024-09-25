import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Create an import task'

const rawOption: INodePropertyOptions = {
  name: 'Create an import task',
  value: 'Create an import task',
  action: 'Create an import task',
  routing: {
    request: {
      method: 'POST',
      url: '=/drive/v1/import_tasks',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
