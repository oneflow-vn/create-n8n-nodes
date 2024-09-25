import { INodeProperties } from 'n8n-workflow'

import * as file from './file'
import * as multipartUploadFiles from './multipart-upload-files'
import * as permissionMember from './permission-member'
import * as permissionpublic from './permissionpublic'
import * as statistics from './statistics'
import * as media from './media'
import * as multipartUploadMedia from './multipart-upload-media'
import * as comment from './comment'
import * as subscription from './subscription'
import * as documentImport from './document-import'

export const properties: INodeProperties[] = [
  ...file.properties,
  ...multipartUploadFiles.properties,
  ...permissionMember.properties,
  ...permissionpublic.properties,
  ...statistics.properties,
  ...media.properties,
  ...multipartUploadMedia.properties,
  ...comment.properties,
  ...subscription.properties,
  ...documentImport.properties,
]
