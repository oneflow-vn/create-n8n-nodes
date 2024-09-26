import { INodeType, INodeTypeDescription } from 'n8n-workflow'
import { properties } from './LarkFiles.properties'

export class LarkFiles implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Lark Files',
    name: 'LarkFiles',
    icon: 'file:larkdocs.svg',
    group: ['transform'],
    version: 1,
    subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
    description: 'Lark Files Management',
    defaults: {
      name: 'LarkFiles',
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
