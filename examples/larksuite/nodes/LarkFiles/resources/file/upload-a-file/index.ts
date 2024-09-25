import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Upload a file'

const rawOption: INodePropertyOptions = {
  name: 'Upload a file',
  value: 'Upload a file',
  action: 'Upload a file',
  routing: {
    request: {
      method: 'POST',
      url: '=/drive/v1/files/upload_all',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
