import { INodeType, INodeTypeDescription } from 'n8n-workflow'
import { properties } from './LarkContacts.properties'
import { methods } from './LarkContacts.methods'

export class LarkContacts implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Lark Contacts',
    name: 'LarkContacts',
    icon: 'file:lark.png',
    group: ['transform'],
    version: 1,
    subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
    description: 'Lark Contacts Management',
    defaults: {
      name: 'LarkContacts',
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
