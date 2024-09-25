import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Upload files'

const rawOption: INodePropertyOptions = {
  name: 'Upload files',
  value: 'Upload files',
  action: 'Upload files',
  routing: {
    request: {
      method: 'POST',
      url: '=/im/v1/files',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
