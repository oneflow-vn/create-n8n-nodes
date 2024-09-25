import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Update a filter'

const rawOption: INodePropertyOptions = {
  name: 'Update a filter',
  value: 'Update a filter',
  action: 'Update a filter',
  routing: {
    request: {
      method: 'PUT',
      url: '=/sheets/v3/spreadsheets/{{$parameter["spreadsheet_token"]}}/sheets/{{$parameter["sheet_id"]}}/filter',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
