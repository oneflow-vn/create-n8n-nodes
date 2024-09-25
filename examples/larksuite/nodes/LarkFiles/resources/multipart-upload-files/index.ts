import { INodeProperties } from 'n8n-workflow'

import * as uploadAFileInBlocksPreuploading from './upload-a-file-in-blocks-preuploading'
import * as uploadAFileInBlocksUploadBlocks from './upload-a-file-in-blocks-upload-blocks'
import * as completeUploadingAFileInBlocks from './complete-uploading-a-file-in-blocks'

export const name = 'Multipart Upload Files'

export const properties: INodeProperties[] = [
  ...uploadAFileInBlocksPreuploading.properties,
  ...uploadAFileInBlocksUploadBlocks.properties,
  ...completeUploadingAFileInBlocks.properties,
]
