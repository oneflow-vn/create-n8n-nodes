import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Complete uploading a file in blocks'

const rawOption: INodePropertyOptions = {
  name: 'Complete uploading a file in blocks',
  value: 'Complete uploading a file in blocks',
  action: 'Complete uploading a file in blocks',
  routing: {
    request: {
      method: 'POST',
      url: '=/drive/v1/files/upload_finish',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
