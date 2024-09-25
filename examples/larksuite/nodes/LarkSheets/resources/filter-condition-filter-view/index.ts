import { INodeProperties } from 'n8n-workflow'

import * as deleteFilterConditions from './delete-filter-conditions'
import * as updateFilterConditions from './update-filter-conditions'
import * as obtainFilterConditions from './obtain-filter-conditions'
import * as queryFilterConditions from './query-filter-conditions'
import * as createAFilterCondition from './create-a-filter-condition'

export const name = 'Filter condition  filter view'

export const properties: INodeProperties[] = [
  ...deleteFilterConditions.properties,
  ...updateFilterConditions.properties,
  ...obtainFilterConditions.properties,
  ...queryFilterConditions.properties,
  ...createAFilterCondition.properties,
]
