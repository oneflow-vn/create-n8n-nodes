import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Create a filter condition'

const rawOption: INodePropertyOptions = {
  name: 'Create a filter condition',
  value: 'Create a filter condition',
  action: 'Create a filter condition',
  routing: {
    request: {
      method: 'POST',
      url: '=/sheets/v3/spreadsheets/{{$parameter["spreadsheet_token"]}}/sheets/{{$parameter["sheet_id"]}}/filter_views/{{$parameter["filter_view_id"]}}/conditions',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
