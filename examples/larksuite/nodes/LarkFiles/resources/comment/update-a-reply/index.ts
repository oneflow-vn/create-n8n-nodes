import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Update a reply'

const rawOption: INodePropertyOptions = {
  name: 'Update a reply',
  value: 'Update a reply',
  action: 'Update a reply',
  routing: {
    request: {
      method: 'PUT',
      url: '=/drive/v1/files/{{$parameter["file_token"]}}/comments/{{$parameter["comment_id"]}}/replies/{{$parameter["reply_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
