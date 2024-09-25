import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Upload a material in blocks Preuploading'

const rawOption: INodePropertyOptions = {
  name: 'Upload a material in blocks Preuploading',
  value: 'Upload a material in blocks Preuploading',
  action: 'Upload a material in blocks (Pre­uploading)',
  routing: {
    request: {
      method: 'POST',
      url: '=/drive/v1/medias/upload_prepare',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
