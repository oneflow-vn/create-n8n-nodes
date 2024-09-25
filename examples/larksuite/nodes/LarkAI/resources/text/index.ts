import { INodeProperties } from 'n8n-workflow'

import * as translateWithMachineTranslation from './translate-with-machine-translation'
import * as textLanguageRecognition from './text-language-recognition'

export const name = 'Text'

export const properties: INodeProperties[] = [
  ...translateWithMachineTranslation.properties,
  ...textLanguageRecognition.properties,
]
