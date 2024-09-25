import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Upload images'

const rawOption: INodePropertyOptions = {
  name: 'Upload images',
  value: 'Upload images',
  action: 'Upload images',
  routing: {
    request: {
      method: 'POST',
      url: '=/im/v1/images',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
