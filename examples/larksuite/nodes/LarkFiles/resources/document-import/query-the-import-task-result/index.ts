import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Query the import task result'

const rawOption: INodePropertyOptions = {
  name: 'Query the import task result',
  value: 'Query the import task result',
  action: 'Query the import task result',
  routing: {
    request: {
      method: 'GET',
      url: '=/drive/v1/import_tasks/{{$parameter["ticket"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
