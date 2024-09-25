import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain a comment'

const rawOption: INodePropertyOptions = {
  name: 'Obtain a comment',
  value: 'Obtain a comment',
  action: 'Obtain a comment',
  routing: {
    request: {
      method: 'GET',
      url: '=/drive/v1/files/{{$parameter["file_token"]}}/comments/{{$parameter["comment_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
