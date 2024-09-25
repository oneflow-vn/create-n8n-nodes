import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Basic image recognition OCR'

const rawOption: INodePropertyOptions = {
  name: 'Basic image recognition OCR',
  value: 'Basic image recognition OCR',
  action: 'Basic image recognition (OCR)',
  routing: {
    request: {
      method: 'POST',
      url: '=/optical_char_recognition/v1/image/basic_recognize',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
