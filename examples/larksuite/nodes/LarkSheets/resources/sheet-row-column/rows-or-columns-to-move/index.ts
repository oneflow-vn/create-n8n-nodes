import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Rows or columns to move'

const rawOption: INodePropertyOptions = {
  name: 'Rows or columns to move',
  value: 'Rows or columns to move',
  action: 'Rows or columns to move',
  routing: {
    request: {
      method: 'POST',
      url: '=/sheets/v3/spreadsheets/{{$parameter["spreadsheet_token"]}}/sheets/{{$parameter["sheet_id"]}}/move_dimension',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
