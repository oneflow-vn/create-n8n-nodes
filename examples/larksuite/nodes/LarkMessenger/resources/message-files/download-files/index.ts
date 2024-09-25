import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Download files'

const rawOption: INodePropertyOptions = {
  name: 'Download files',
  value: 'Download files',
  action: 'Download files',
  routing: {
    request: {
      method: 'GET',
      url: '=/im/v1/files/{{$parameter["file_key"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
