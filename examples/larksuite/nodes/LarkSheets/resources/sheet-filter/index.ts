import { INodeProperties } from 'n8n-workflow'

import * as obtainFilter from './obtain-filter'
import * as createAFilter from './create-a-filter'
import * as updateAFilter from './update-a-filter'
import * as deleteAFilter from './delete-a-filter'

export const name = 'Sheet  Filter'

export const properties: INodeProperties[] = [
  ...obtainFilter.properties,
  ...createAFilter.properties,
  ...updateAFilter.properties,
  ...deleteAFilter.properties,
]
