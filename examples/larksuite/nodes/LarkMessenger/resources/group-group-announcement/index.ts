import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'

import * as obtainGroupAnnouncementInformation from './obtain-group-announcement-information'
import * as updateGroupAnnouncementInfo from './update-group-announcement-info'

const operations: INodePropertyOptions[] = [
  obtainGroupAnnouncementInformation.option,
  updateGroupAnnouncementInfo.option,
]

export const name = 'Group  Group Announcement'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Messenger Group Group Announcement'],
    },
  },
  default: '',
}

// overwrite the options of the operationSelect
operationSelect.options = operations

// set the default operation
operationSelect.default = operations.length > 0 ? operations[0].value : ''

export const properties: INodeProperties[] = [
  operationSelect,
  ...obtainGroupAnnouncementInformation.properties,
  ...updateGroupAnnouncementInfo.properties,
]
