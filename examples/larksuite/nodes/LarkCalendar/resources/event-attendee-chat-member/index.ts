import { INodeProperties } from 'n8n-workflow'

import * as obtainTheListOfMembersOfGroupInviteesOfAnEvent from './obtain-the-list-of-members-of-group-invitees-of-an-event'

export const name = 'Event Attendee Chat Member'

export const properties: INodeProperties[] = [
  ...obtainTheListOfMembersOfGroupInviteesOfAnEvent.properties,
]
