import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Solve or restore a comment'

const rawOption: INodePropertyOptions = {
  name: 'Solve or restore a comment',
  value: 'Solve or restore a comment',
  action: 'Solve or restore a comment',
  routing: {
    request: {
      method: 'PATCH',
      url: '=/drive/v1/files/{{$parameter["file_token"]}}/comments/{{$parameter["comment_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
