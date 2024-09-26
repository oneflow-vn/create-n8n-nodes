import { INodeType, INodeTypeDescription } from 'n8n-workflow'
import { properties } from './LarkApps.properties'
import { methods } from './LarkApps.methods'

export class LarkApps implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Lark Apps',
    name: 'LarkApps',
    icon: 'file:larkapp.svg',
    group: ['transform'],
    version: 1,
    subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
    description: 'Lark Apps Management',
    defaults: {
      name: 'LarkApps',
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
        displayName: 'OAuth2 Token',
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
