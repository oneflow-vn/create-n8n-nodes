import { INodeProperties } from 'n8n-workflow'

import * as uploadAMaterialInBlocksPreuploading from './upload-a-material-in-blocks-preuploading'
import * as uploadAMaterialInBlocksUploadBlocks from './upload-a-material-in-blocks-upload-blocks'
import * as completeUploadingAMaterialInBlocks from './complete-uploading-a-material-in-blocks'

export const name = 'Multipart Upload Media'

export const properties: INodeProperties[] = [
  ...uploadAMaterialInBlocksPreuploading.properties,
  ...uploadAMaterialInBlocksUploadBlocks.properties,
  ...completeUploadingAMaterialInBlocks.properties,
]
