import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Upload a file in blocks Preuploading'

const rawOption: INodePropertyOptions = {
  name: 'Upload a file in blocks Preuploading',
  value: 'Upload a file in blocks Preuploading',
  action: 'Upload a file in blocks (Pre­uploading)',
  routing: {
    request: {
      method: 'POST',
      url: '=/drive/v1/files/upload_prepare',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
