import { INodeProperties } from 'n8n-workflow'

import * as obtainGroupAnnouncementInformation from './obtain-group-announcement-information'
import * as updateGroupAnnouncementInfo from './update-group-announcement-info'

export const name = 'Group  Group Announcement'

export const properties: INodeProperties[] = [
  ...obtainGroupAnnouncementInformation.properties,
  ...updateGroupAnnouncementInfo.properties,
]
