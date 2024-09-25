import { INodeType, INodeTypeDescription } from 'n8n-workflow'
import { properties } from './LarkAttendance.properties'

export class LarkAttendance implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Lark Attendance',
    name: 'LarkAttendance',
    icon: 'fa:clock',
    group: ['transform'],
    version: 1,
    subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
    description: 'Lark Attendance Management',
    defaults: {
      name: 'LarkAttendance',
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
