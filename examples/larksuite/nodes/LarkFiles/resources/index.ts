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

const resourceSelect: INodeProperties = {
  displayName: 'Resource',
  name: 'resource',
  type: 'options',
  noDataExpression: true,
  options: [
    {
      name: 'File',
      value: 'Docs File Management File',
    },
    {
      name: 'Multipart Upload Files',
      value: 'Docs File Management File Multipart Upload Files',
    },
    {
      name: 'Permission Member',
      value: 'Docs File Management Permission Permission Member',
    },
    {
      name: 'permissionpublic',
      value: 'Docs File Management Permission Permission Public',
    },
    {
      name: 'Statistics',
      value: 'Docs File Management Statistics',
    },
    {
      name: 'Media',
      value: 'Docs File Management Media',
    },
    {
      name: 'Multipart Upload Media',
      value: 'Docs File Management Media Multipart Upload Media',
    },
    {
      name: 'Comment',
      value: 'Docs File Management Comment',
    },
    {
      name: 'Subscription',
      value: 'Docs File Management Subscription',
    },
    {
      name: 'document import',
      value: 'Docs File Management Document Import',
    },
  ],
  default: '',
}

export const properties: INodeProperties[] = [
  resourceSelect,
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
