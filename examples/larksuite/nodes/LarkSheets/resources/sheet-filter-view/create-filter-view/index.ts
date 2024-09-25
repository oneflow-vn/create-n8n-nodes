import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Create filter view'

const rawOption: INodePropertyOptions = {
  name: 'Create filter view',
  value: 'Create filter view',
  action: 'Create filter view',
  routing: {
    request: {
      method: 'POST',
      url: '=/sheets/v3/spreadsheets/{{$parameter["spreadsheet_token"]}}/sheets/{{$parameter["sheet_id"]}}/filter_views',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
