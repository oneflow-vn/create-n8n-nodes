import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Translate With Machine Translation'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Translate With Machine Translation',
  value: 'Translate With Machine Translation',
  action: 'Translate with machine translation',
  description:
    'Machine translation (MT), supporting Chinese-Japanese-English (zh, ja, en) translation\r\n\r\nAPI reference documentation: [Translate with machine translation]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/ai/translation-v1/text/translate)',
  routing: {
    request: {
      method: 'POST',
      url: '=/translation/v1/text/translate',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
