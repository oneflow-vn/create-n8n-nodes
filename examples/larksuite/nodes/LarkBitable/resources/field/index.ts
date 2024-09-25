import { INodeProperties } from 'n8n-workflow'

import * as listAllFields from './list-all-fields'
import * as createField from './create-field'
import * as updateField from './update-field'
import * as deleteField from './delete-field'

export const name = 'Field'

export const properties: INodeProperties[] = [
  ...listAllFields.properties,
  ...createField.properties,
  ...updateField.properties,
  ...deleteField.properties,
]
