import { INodeType, INodeTypeDescription } from 'n8n-workflow'
import { properties } from './LarkAuth.properties'
import { methods } from './LarkAuth.methods'

export class LarkAuth implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Lark Auth',
    name: 'larkAuth',
    icon: 'file:locked.png',
    group: ['transform'],
    version: 1,
    subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
    description: 'Lark Auth Management',
    defaults: {
      name: 'Lark Auth',
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
      baseURL: 'https://open.larksuite.com',
    },
    properties: properties,
  }

  methods = methods
}
