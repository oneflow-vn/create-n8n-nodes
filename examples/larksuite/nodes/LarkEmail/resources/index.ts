import { INodeProperties } from 'n8n-workflow'
import runhook from './hooks'

import * as mailGroup from './mail-group'
import * as mailGroupMember from './mail-group-member'
import * as mailGroupPermissionMember from './mail-group-permission-member'
import * as mailGroupAlias from './mail-group-alias'
import * as publicMailbox from './public-mailbox'
import * as publicMailboxMember from './public-mailbox-member'
import * as publicMailboxAlias from './public-mailbox-alias'

const resourceSelect: INodeProperties = {
  displayName: 'Resource',
  name: 'resource',
  type: 'options',
  noDataExpression: true,
  options: [
    {
      name: 'Mail Group',
      value: 'Email Mail Group',
    },
    {
      name: 'Mail Group Member',
      value: 'Email Mail Group Member',
    },
    {
      name: 'Mail Group Permission Member',
      value: 'Email Mail Group Permission Member',
    },
    {
      name: 'Mail Group Alias',
      value: 'Email Mail Group Alias',
    },
    {
      name: 'Public Mailbox',
      value: 'Email Public Mailbox',
    },
    {
      name: 'Public Mailbox Member',
      value: 'Email Public Mailbox Member',
    },
    {
      name: 'Public Mailbox Alias',
      value: 'Email Public Mailbox Alias',
    },
  ],
  default: '',
}

const rawProperties: INodeProperties[] = [
  resourceSelect,
  ...mailGroup.properties,
  ...mailGroupMember.properties,
  ...mailGroupPermissionMember.properties,
  ...mailGroupAlias.properties,
  ...publicMailbox.properties,
  ...publicMailboxMember.properties,
  ...publicMailboxAlias.properties,
]

const { properties } = runhook(rawProperties)

export { properties }
