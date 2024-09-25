import { INodeProperties } from 'n8n-workflow'

import * as queryTheWorkforceType from './query-the-workforce-type'
import * as addAWorkforceType from './add-a-workforce-type'
import * as updateTheWorkforceType from './update-the-workforce-type'
import * as deleteWorkforceTypes from './delete-workforce-types'

export const name = 'Workforce Type'

export const properties: INodeProperties[] = [
  ...queryTheWorkforceType.properties,
  ...addAWorkforceType.properties,
  ...updateTheWorkforceType.properties,
  ...deleteWorkforceTypes.properties,
]
