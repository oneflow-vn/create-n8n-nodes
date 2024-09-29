import { INodeType, INodeTypeDescription } from 'n8n-workflow'
import { properties } from './LarkCalendar.properties'
import { methods } from './LarkCalendar.methods'

export class LarkCalendar implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Lark Calendar',
    name: 'larkCalendar',
    icon: 'file:larkcalendar.svg',
    group: ['transform'],
    version: 1,
    subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
    description: 'Lark Calendar Management',
    defaults: {
      name: 'Lark Calendar',
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
