import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain statistics of a file'

const rawOption: INodePropertyOptions = {
  name: 'Obtain statistics of a file',
  value: 'Obtain statistics of a file',
  action: 'Obtain statistics of a file',
  routing: {
    request: {
      method: 'GET',
      url: '=/drive/v1/files/{{$parameter["file_token"]}}/statistics',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
