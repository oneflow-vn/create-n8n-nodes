import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Create a floating image'

const rawOption: INodePropertyOptions = {
  name: 'Create a floating image',
  value: 'Create a floating image',
  action: 'Create a floating image',
  routing: {
    request: {
      method: 'POST',
      url: '=/sheets/v3/spreadsheets/{{$parameter["spreadsheet_token"]}}/sheets/{{$parameter["sheet_id"]}}/float_images',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
