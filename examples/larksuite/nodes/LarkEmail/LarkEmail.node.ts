import { INodeType, INodeTypeDescription } from 'n8n-workflow'
import { properties } from './LarkEmail.properties'

export class LarkEmail implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Lark Email',
    name: 'LarkEmail',
    icon: 'file:larkemail.svg',
    group: ['transform'],
    version: 1,
    subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
    description: 'Lark Email Management',
    defaults: {
      name: 'LarkEmail',
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
