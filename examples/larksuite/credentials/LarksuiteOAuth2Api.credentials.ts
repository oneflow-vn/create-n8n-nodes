import type { ICredentialType, INodeProperties } from 'n8n-workflow'

export class LarksuiteOAuth2Api implements ICredentialType {
  name = 'larksuiteOAuth2Api'

  extends = ['oAuth2Api']

  displayName = 'Larksuite OAuth2 API'

  documentationUrl = 'larksuite'

  properties: INodeProperties[] = [
    {
      displayName: 'Grant Type',
      name: 'grantType',
      type: 'hidden',
      default: 'authorizationCode',
    },
    {
      displayName: 'Authorization URL',
      name: 'authUrl',
      type: 'hidden',
      default: 'https://passport.larksuite.com/suite/passport/oauth/authorize',
      required: true,
    },
    {
      displayName: 'Access Token URL',
      name: 'accessTokenUrl',
      type: 'hidden',
      default: 'https://passport.larksuite.com/suite/passport/oauth/token',
      required: true,
    },
    {
      displayName: 'Scope',
      name: 'scope',
      type: 'hidden',
      default: '',
    },
    {
      displayName: 'Auth URI Query Parameters',
      name: 'authQueryParameters',
      type: 'hidden',
      default: 'response_type=code',
    },
    {
      displayName: 'Authentication',
      name: 'authentication',
      type: 'hidden',
      default: 'body',
    },
  ]
}
