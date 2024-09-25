import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Upload a material'

const rawOption: INodePropertyOptions = {
  name: 'Upload a material',
  value: 'Upload a material',
  action: 'Upload a material',
  routing: {
    request: {
      method: 'POST',
      url: '=/drive/v1/medias/upload_all',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
