import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Download a file'

const rawOption: INodePropertyOptions = {
  name: 'Download a file',
  value: 'Download a file',
  action: 'Download a file',
  routing: {
    request: {
      method: 'GET',
      url: '=/drive/v1/files/{{$parameter["file_token"]}}/download',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
