import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Replace'

const rawOption: INodePropertyOptions = {
  name: 'Replace',
  value: 'Replace',
  action: 'Replace',
  routing: {
    request: {
      method: 'POST',
      url: '=/sheets/v3/spreadsheets/{{$parameter["spreadsheet_token"]}}/sheets/{{$parameter["sheet_id"]}}/replace',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
