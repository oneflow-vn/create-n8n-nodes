import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Download images'

const rawOption: INodePropertyOptions = {
  name: 'Download images',
  value: 'Download images',
  action: 'Download images',
  routing: {
    request: {
      method: 'GET',
      url: '=/im/v1/images/{{$parameter["image_key"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
