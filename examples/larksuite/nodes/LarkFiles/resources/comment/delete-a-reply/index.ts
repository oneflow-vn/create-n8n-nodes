import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Delete a reply'

const rawOption: INodePropertyOptions = {
  name: 'Delete a reply',
  value: 'Delete a reply',
  action: 'Delete a reply',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/drive/v1/files/{{$parameter["file_token"]}}/comments/{{$parameter["comment_id"]}}/replies/{{$parameter["reply_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
