import { INodeProperties } from 'n8n-workflow'

import * as deleteFilterView from './delete-filter-view'
import * as updateFilterView from './update-filter-view'
import * as obtainFilterView from './obtain-filter-view'
import * as queryFilterView from './query-filter-view'
import * as createFilterView from './create-filter-view'

export const name = 'Sheet  Filter view'

export const properties: INodeProperties[] = [
  ...deleteFilterView.properties,
  ...updateFilterView.properties,
  ...obtainFilterView.properties,
  ...queryFilterView.properties,
  ...createFilterView.properties,
]
