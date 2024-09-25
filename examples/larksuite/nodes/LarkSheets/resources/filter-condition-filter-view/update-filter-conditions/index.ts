import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Update filter conditions'

const rawOption: INodePropertyOptions = {
  name: 'Update filter conditions',
  value: 'Update filter conditions',
  action: 'Update filter conditions',
  routing: {
    request: {
      method: 'PUT',
      url: '=/sheets/v3/spreadsheets/{{$parameter["spreadsheet_token"]}}/sheets/{{$parameter["sheet_id"]}}/filter_views/{{$parameter["filter_view_id"]}}/conditions/{{$parameter["condition_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
