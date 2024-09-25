import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Update a floating image'

const rawOption: INodePropertyOptions = {
  name: 'Update a floating image',
  value: 'Update a floating image',
  action: 'Update a floating image',
  routing: {
    request: {
      method: 'PATCH',
      url: '=/sheets/v3/spreadsheets/{{$parameter["spreadsheet_token"]}}/sheets/{{$parameter["sheet_id"]}}/float_images/{{$parameter["float_image_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
