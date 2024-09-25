import { INodeProperties } from 'n8n-workflow'

import * as createAFloatingImage from './create-a-floating-image'
import * as obtainAFloatingImage from './obtain-a-floating-image'
import * as updateAFloatingImage from './update-a-floating-image'
import * as deleteAFloatingImage from './delete-a-floating-image'
import * as queryFloatingImages from './query-floating-images'

export const name = 'Sheet  Floating image'

export const properties: INodeProperties[] = [
  ...createAFloatingImage.properties,
  ...obtainAFloatingImage.properties,
  ...updateAFloatingImage.properties,
  ...deleteAFloatingImage.properties,
  ...queryFloatingImages.properties,
]
