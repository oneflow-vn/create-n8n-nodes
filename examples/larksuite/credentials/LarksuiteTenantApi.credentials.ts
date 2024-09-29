import type {
	// IAuthenticateGeneric,
	ICredentialDataDecryptedObject,
	ICredentialTestRequest,
	ICredentialType,
	IHttpRequestHelper,
	IHttpRequestOptions,
	INodeProperties,
} from 'n8n-workflow';

type ILarkSuiteCredentials = {
	appId: string;
	appSecret: string;
	tenantAccessToken: string;
};

// temporary workaround to store the token expiration
// by default, each token will be expired in 2 hours
// so we need to store the token expiration time
const tokenExpiration = 2 * 60 * 60 * 1000;

const tokenExpirationMap = new Map<string, number>();

export class LarkSuiteTenantApi implements ICredentialType {
	name = 'larkSuiteTenantApi';

	displayName = 'LarkSuite Tenant';

	documentationUrl =
		'https://open.larksuite.com/document/server-docs/getting-started/api-access-token/g';

	properties: INodeProperties[] = [
		{
			displayName: 'App ID',
			name: 'appId',
			type: 'string',
			default: '',
		},
		{
			displayName: 'App Secret',
			name: 'appSecret',
			type: 'string',
			typeOptions: { password: true },
			default: '',
		},
		{
			displayName: 'Tenant access token',
			name: 'tenantAccessToken',
			type: 'hidden',
			default: '',
			typeOptions: {
				expirable: true,
			},
		},
	];

	isValidToken(token: string) {
		if (!token) {
			return false;
		}

		if (!tokenExpirationMap.has(token)) {
			return false
		}

		if (tokenExpirationMap.has(token)) {
			const expiration = tokenExpirationMap.get(token);
			if (expiration && expiration < Date.now()) {
				return false;
			}
		}

		return true;
	}

	async authenticate(
		credentials: ICredentialDataDecryptedObject,
		requestOptions: IHttpRequestOptions,
	): Promise<IHttpRequestOptions> {
		//check whether the token is an API Key or an access token
		const { tenantAccessToken } = credentials as ILarkSuiteCredentials;

		// Workaround to check whether the token is expired or not
		// Since the api not returning 401 due to invalid re-authentication handling behavior by n8n
		// Then we need to check the token expiration manually
		// @ts-ignore
		if (!this.isValidToken(tenantAccessToken)) {
			// manually throw a mock 401 axios error
			throw {
				response: {
					status: 401,
					statusText: 'Unauthorized',
					data: {
						code: 401,
						msg: 'Unauthorized',
					},
				},
			};
		}

		// set the Authorization header
		if (requestOptions.headers) {
			requestOptions.headers['Authorization'] = `Bearer ${tenantAccessToken}`;
		}

		return requestOptions;
	}

	async preAuthentication(this: IHttpRequestHelper, credentials: ICredentialDataDecryptedObject) {
		const { tenant_access_token } = (await this.helpers.httpRequest({
			method: 'POST',
			url: `https://open.larksuite.com/open-apis/auth/v3/tenant_access_token/internal`,
			body: {
				app_id: credentials.appId,
				app_secret: credentials.appSecret,
			},
			headers: {
				'Content-Type': 'application/json',
			},
		})) as { tenant_access_token: string };

		// trim the token \s, \n, \r
		// t-g2069savYQEQMUPZBDUXN2JBSHAID6SAX5XUBS2F\r\n
		const tenantAccessToken = tenant_access_token.replace(/[\s\n\r]/g, '');

		// store the token expiration
		tokenExpirationMap.set(tenantAccessToken, Date.now() + tokenExpiration);

		// store up to 100 tokens
		if (tokenExpirationMap.size > 100) {
			tokenExpirationMap.delete(tokenExpirationMap.keys().next().value);
		}

		return { tenantAccessToken };
	}

	test: ICredentialTestRequest = {
		request: {
			method: 'GET',
			url: 'https://open.larksuite.com/open-apis/tenant/v2/tenant/query',
		},
		rules: [
			{
				errorMessage: 'Authorization Error: Make sure to use the correct App ID and App Secret',
				type: 'responseCode',
				properties: {
					value: 200,
					message: '',
				},
			},
		],
	};
}
