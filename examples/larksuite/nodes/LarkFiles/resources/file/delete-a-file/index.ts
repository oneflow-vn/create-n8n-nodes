import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Delete a file'

const rawOption: INodePropertyOptions = {
  name: 'Delete a file',
  value: 'Delete a file',
  action: 'Delete a file',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/drive/v1/files/{{$parameter["file_token"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
