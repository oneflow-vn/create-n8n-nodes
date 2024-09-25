import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Upload a file in blocks Upload blocks'

const rawOption: INodePropertyOptions = {
  name: 'Upload a file in blocks Upload blocks',
  value: 'Upload a file in blocks Upload blocks',
  action: 'Upload a file in blocks (Upload blocks)',
  routing: {
    request: {
      method: 'POST',
      url: '=/drive/v1/files/upload_part',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
