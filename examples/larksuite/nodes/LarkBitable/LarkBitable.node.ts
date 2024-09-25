import { INodeType, INodeTypeDescription } from 'n8n-workflow'
import { properties } from './LarkBitable.properties'

export class LarkBitable implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Lark Bitable',
    name: 'LarkBitable',
    icon: 'fa:table',
    group: ['transform'],
    version: 1,
    subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
    description: 'Lark Bitable Management',
    defaults: {
      name: 'LarkBitable',
    },
    inputs: ['main'],
    outputs: ['main'],
    credentials: [
      {
        name: 'larksuiteOAuth2Api',
        required: true,
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
