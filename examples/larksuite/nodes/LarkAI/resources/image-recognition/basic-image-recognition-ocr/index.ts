import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Basic Image Recognition Ocr'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Basic Image Recognition Ocr',
  value: 'Basic Image Recognition Ocr',
  action: 'Basic image recognition (OCR)',
  description:
    'Basic picture recognition interface, recognize the text in the picture, and return the text list by area\r\n\r\nAPI reference documentation: [Basic image recognition (OCR)]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/ai/optical_char_recognition-v1/image/basic_recognize)',
  routing: {
    request: {
      method: 'POST',
      url: '=/optical_char_recognition/v1/image/basic_recognize',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
