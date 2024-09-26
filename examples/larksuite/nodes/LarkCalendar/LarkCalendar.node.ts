import { INodeType, INodeTypeDescription } from 'n8n-workflow'
import { properties } from './LarkCalendar.properties'

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
        name: 'larksuiteOAuth2Api',
        required: true,
        displayOptions: {
          show: {
            authentication: ['oauth2'],
          },
        },
      },
      {
        name: 'larksuiteTenantApi',
        required: true,
        displayOptions: {
          show: {
            authentication: ['accessToken'],
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
}
