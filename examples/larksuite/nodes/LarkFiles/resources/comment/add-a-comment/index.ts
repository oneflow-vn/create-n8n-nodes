import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Add a comment'

const rawOption: INodePropertyOptions = {
  name: 'Add a comment',
  value: 'Add a comment',
  action: 'Add a comment',
  routing: {
    request: {
      method: 'POST',
      url: '=/drive/v1/files/{{$parameter["file_token"]}}/comments',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
