import { INodeType, INodeTypeDescription } from 'n8n-workflow'
import { properties } from './LarkCompany.properties'
import { methods } from './LarkCompany.methods'

export class LarkCompany implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Lark Company',
    name: 'LarkCompany',
    icon: 'file:larkcompany.png',
    group: ['transform'],
    version: 1,
    subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
    description: 'Lark Company Management',
    defaults: {
      name: 'LarkCompany',
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
            authentication: ['=larkSuiteTenantApi'],
          },
        },
      },
      {
        displayName: 'OAuth2',
        name: 'larkSuiteOAuth2Api',
        required: true,
        displayOptions: {
          show: {
            authentication: ['=larkSuiteOAuth2Api'],
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
