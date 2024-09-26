import { INodeType, INodeTypeDescription } from 'n8n-workflow'
import { properties } from './LarkAuth.properties'

export class LarkAuth implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Lark Auth',
    name: 'LarkAuth',
    icon: 'fa:lock',
    group: ['transform'],
    version: 1,
    subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
    description: 'Lark Auth Management',
    defaults: {
      name: 'LarkAuth',
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
      baseURL: 'https://open.larksuite.com',
    },
    properties: properties,
  }
}
