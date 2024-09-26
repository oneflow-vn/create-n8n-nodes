import { INodeProperties } from 'n8n-workflow'
import runhook from './hooks'

import * as user from './user'
import * as department from './department'
import * as userGroup from './user-group'
import * as userGroupMember from './user-group-member'
import * as unit from './unit'
import * as workforceType from './workforce-type'
import * as customUserFields from './custom-user-fields'
import * as contactScope from './contact-scope'

const resourceSelect: INodeProperties = {
  displayName: 'Resource',
  name: 'resource',
  type: 'options',
  noDataExpression: true,
  options: [
    {
      name: 'User',
      value: 'Contacts User',
    },
    {
      name: 'Department',
      value: 'Contacts Department',
    },
    {
      name: 'User Group',
      value: 'Contacts User Group',
    },
    {
      name: 'User Group Member',
      value: 'Contacts User Group User Group Member',
    },
    {
      name: 'Unit',
      value: 'Contacts Unit',
    },
    {
      name: 'Workforce Type',
      value: 'Contacts Workforce Type',
    },
    {
      name: 'Custom User Fields',
      value: 'Contacts Custom User Fields',
    },
    {
      name: 'Contact Scope',
      value: 'Contacts Contact Scope',
    },
  ],
  default: '',
}

const rawProperties: INodeProperties[] = [
  resourceSelect,
  ...user.properties,
  ...department.properties,
  ...userGroup.properties,
  ...userGroupMember.properties,
  ...unit.properties,
  ...workforceType.properties,
  ...customUserFields.properties,
  ...contactScope.properties,
]

const { properties } = runhook(rawProperties)

export { properties }
