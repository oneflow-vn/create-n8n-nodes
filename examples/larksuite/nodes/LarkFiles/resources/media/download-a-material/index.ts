import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Download a material'

const rawOption: INodePropertyOptions = {
  name: 'Download a material',
  value: 'Download a material',
  action: 'Download a material',
  routing: {
    request: {
      method: 'GET',
      url: '=/drive/v1/medias/{{$parameter["file_token"]}}/download',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
