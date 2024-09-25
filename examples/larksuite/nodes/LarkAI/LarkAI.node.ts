import { INodeType, INodeTypeDescription } from 'n8n-workflow'
import { properties } from './LarkAI.properties'

export class LarkAI implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Lark AI',
    name: 'LarkAI',
    icon: 'fa:robot',
    group: ['transform'],
    version: 1,
    subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
    description: 'Lark AI Management',
    defaults: {
      name: 'LarkAI',
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
