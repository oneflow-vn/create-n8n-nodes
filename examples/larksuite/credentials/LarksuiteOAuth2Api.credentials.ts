import type { ICredentialType, INodeProperties, ICredentialTestRequest } from 'n8n-workflow'

export class LarkSuiteOAuth2Api implements ICredentialType {
  name = 'larkSuiteOAuth2Api';

  extends = ['oAuth2Api'];

  displayName = 'LarkSuite OAuth2';

	documentationUrl = 'https://open.larksuite.com/document/server-docs/getting-started/api-access-token/g';

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
  ];

  test: ICredentialTestRequest = {
    request: {
      url: 'https://open.larksuite.com/open-apis/authen/v1/user_info',
      method: 'GET',
    }
  };
}
