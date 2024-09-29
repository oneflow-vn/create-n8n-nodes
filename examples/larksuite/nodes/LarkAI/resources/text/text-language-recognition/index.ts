import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Text Language Recognition'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Text Language Recognition',
  value: 'Text Language Recognition',
  action: 'Text language recognition',
  description:
    'Machine translation (MT), supporting recognition of over 100 languages. The return value is ISO 639-1 compliant.\r\n\r\nAPI reference documentation: [Text language recognition]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/ai/translation-v1/text/detect)',
  routing: {
    request: {
      method: 'POST',
      url: '=/translation/v1/text/detect',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
