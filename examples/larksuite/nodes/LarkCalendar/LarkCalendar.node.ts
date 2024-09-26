import { INodeType, INodeTypeDescription } from 'n8n-workflow'
import { properties } from './LarkCalendar.properties'
import { methods } from './LarkCalendar.methods'

export class LarkCalendar implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Lark Calendar',
    name: 'LarkCalendar',
    icon: 'file:larkcalendar.svg',
    group: ['transform'],
    version: 1,
    subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
    description: 'Lark Calendar Management',
    defaults: {
      name: 'LarkCalendar',
    },
    inputs: ['main'],
    outputs: ['main'],
    credentials: [
      {
        displayName: 'Tenant Token',
        name: 'larkSuiteTenantApi',
        required: false,
        displayOptions: {
          show: {
            authentication: ['accessToken'],
          },
        },
      },
      {
        displayName: 'OAuth2',
        name: 'larkSuiteOAuth2Api',
        required: false,
        displayOptions: {
          show: {
            authentication: ['oAuth2'],
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
