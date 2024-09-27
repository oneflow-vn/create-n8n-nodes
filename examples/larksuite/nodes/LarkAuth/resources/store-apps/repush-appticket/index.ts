import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Repush appticket'

const rawOption: INodePropertyOptions = {
  name: 'Repush appticket',
  value: 'Repush appticket',
  action: 'Re-push app_ticket',
  routing: {
    request: {
      method: 'POST',
      url: '=/open-apis/auth/v3/app_ticket/resend/',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
