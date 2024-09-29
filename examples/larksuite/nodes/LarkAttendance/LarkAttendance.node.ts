import { INodeType, INodeTypeDescription } from 'n8n-workflow'
import { properties } from './LarkAttendance.properties'
import { methods } from './LarkAttendance.methods'

export class LarkAttendance implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Lark Attendance',
    name: 'larkAttendance',
    icon: 'file:larkatentance.png',
    group: ['transform'],
    version: 1,
    subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
    description: 'Lark Attendance Management',
    defaults: {
      name: 'Lark Attendance',
    },
    inputs: ['main'],
    outputs: ['main'],
    credentials: [
      {
        displayName: 'Tenant Token',
        name: 'larkSuiteTenantApi',
        required: true,
        displayOptions: {
          show: {
            authentication: ['larkSuiteTenantApi'],
          },
        },
      },
      {
        displayName: 'OAuth2',
        name: 'larkSuiteOAuth2Api',
        required: true,
        displayOptions: {
          show: {
            authentication: ['larkSuiteOAuth2Api'],
          },
        },
      },
    ],
    requestDefaults: {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      baseURL: 'https://open.larksuite.com/open-apis',
    },
    properties: properties,
  }

  methods = methods
}
