import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain a comment list'

const rawOption: INodePropertyOptions = {
  name: 'Obtain a comment list',
  value: 'Obtain a comment list',
  action: 'Obtain a comment list',
  routing: {
    request: {
      method: 'GET',
      url: '=/drive/v1/files/{{$parameter["file_token"]}}/comments',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
