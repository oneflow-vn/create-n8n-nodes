import { INodeProperties } from 'n8n-workflow'
import { aggregateNodeMethods } from '../helpers/methods'
import runHooks from './hooks'

import * as user from './user'
import * as department from './department'
import * as userGroup from './user-group'
import * as userGroupMember from './user-group-member'
import * as unit from './unit'
import * as workforceType from './workforce-type'
import * as customUserFields from './custom-user-fields'
import * as contactScope from './contact-scope'

const authenticationProperties: INodeProperties[] = [
  {
    displayName: 'Authentication',
    name: 'authentication',
    type: 'options',
    options: [
      {
        name: 'Tenant Token',
        value: 'larkSuiteTenantApi',
      },
      {
        name: 'OAuth2',
        value: 'larkSuiteOAuth2Api',
      },
    ],
    default: 'larkSuiteTenantApi',
  },
]

const resourceSelect: INodeProperties[] = [
  {
    displayName: 'Resource',
    name: 'resource',
    type: 'options',
    noDataExpression: true,
    options: [
      {
        name: 'User',
        value: 'Contacts User',
        description: '',
      },
      {
        name: 'Department',
        value: 'Contacts Department',
        description: '',
      },
      {
        name: 'User Group',
        value: 'Contacts User Group',
        description: '',
      },
      {
        name: 'User Group Member',
        value: 'Contacts User Group User Group Member',
        description: '',
      },
      {
        name: 'Unit',
        value: 'Contacts Unit',
        description: '',
      },
      {
        name: 'Workforce Type',
        value: 'Contacts Workforce Type',
        description: '',
      },
      {
        name: 'Custom User Fields',
        value: 'Contacts Custom User Fields',
        description: '',
      },
      {
        name: 'Contact Scope',
        value: 'Contacts Contact Scope',
        description: '',
      },
    ],
    default: '',
  },
]

const extraProperties: INodeProperties[] = [
  {
    displayName: 'Options',
    name: 'options',
    type: 'collection',
    placeholder: 'Add option',
    default: {},
    options: [
      {
        displayName: 'Use Custom Body',
        name: 'useCustomBody',
        type: 'boolean',
        description: 'Wether to use a custom body',
        required: true,
        default: false,
      },
    ],
  },
]

const rawProperties: INodeProperties[] = [
  ...authenticationProperties,
  ...resourceSelect,
  ...user.properties,
  ...department.properties,
  ...userGroup.properties,
  ...userGroupMember.properties,
  ...unit.properties,
  ...workforceType.properties,
  ...customUserFields.properties,
  ...contactScope.properties,
  ...extraProperties,
]

const { properties, methods: selfMethods } = runHooks(rawProperties)

const methods = aggregateNodeMethods([
  selfMethods,
  user.methods,
  department.methods,
  userGroup.methods,
  userGroupMember.methods,
  unit.methods,
  workforceType.methods,
  customUserFields.methods,
  contactScope.methods,
])

export { properties, methods }
