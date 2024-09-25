import { INodeProperties } from 'n8n-workflow'

import * as uploadAMaterial from './upload-a-material'
import * as obtainATemporaryMaterialDownloadUrl from './obtain-a-temporary-material-download-url'
import * as downloadAMaterial from './download-a-material'

export const name = 'Media'

export const properties: INodeProperties[] = [
  ...uploadAMaterial.properties,
  ...obtainATemporaryMaterialDownloadUrl.properties,
  ...downloadAMaterial.properties,
]
