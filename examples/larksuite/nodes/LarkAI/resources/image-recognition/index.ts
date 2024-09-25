import { INodeProperties } from 'n8n-workflow'

import * as basicImageRecognitionOcr from './basic-image-recognition-ocr'

export const name = 'Image Recognition'

export const properties: INodeProperties[] = [
  ...basicImageRecognitionOcr.properties,
]
