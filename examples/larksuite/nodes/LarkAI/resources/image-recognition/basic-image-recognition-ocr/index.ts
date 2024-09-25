import { properties } from './properties'

export const name = 'Basic image recognition OCR'

const option = {
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

export { option, properties }
