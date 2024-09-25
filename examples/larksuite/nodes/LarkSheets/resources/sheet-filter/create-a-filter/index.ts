import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Create a filter'

const rawOption: INodePropertyOptions = {
  name: 'Create a filter',
  value: 'Create a filter',
  action: 'Create a filter',
  routing: {
    request: {
      method: 'POST',
      url: '=/sheets/v3/spreadsheets/{{$parameter["spreadsheet_token"]}}/sheets/{{$parameter["sheet_id"]}}/filter',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
