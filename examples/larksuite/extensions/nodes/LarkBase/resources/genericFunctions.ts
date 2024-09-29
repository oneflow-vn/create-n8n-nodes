import type {
	IDataObject,
	IExecuteFunctions,
	IHookFunctions,
	IHttpRequestMethods,
	ILoadOptionsFunctions,
	IRequestOptions,
} from 'n8n-workflow';

async function selectCredentials(this: IHookFunctions | IExecuteFunctions | ILoadOptionsFunctions, operation: string): Promise<string> {
	const creds = ['larkSuiteOAuth2Api', 'larkSuiteTenantApi'];

	for (const cred of creds) {
		try {
			if (await this.getCredentials(cred)) {
				return cred;
			}
		} catch (error) {
			// console.error(error);
			// Do nothing
		}
	}

	throw new Error(`No credentials found for operation ${operation}`);
}

/**
 * Make an API request to Trello
 *
 */
export async function apiRequest(
	this: IHookFunctions | IExecuteFunctions | ILoadOptionsFunctions,
	method: IHttpRequestMethods,
	endpoint: string,
	body: object,
	query?: IDataObject,
): Promise<any> {
	query = query || {};

	const options: IRequestOptions = {
		method,
		body,
		qs: query,
		uri: `https://open.larksuite.com/open-apis/${endpoint}`,
		json: true,
	};

	if (method === 'GET') {
		delete options.body;
	}

	const credentialsType = await selectCredentials.call(this, endpoint);

	return await this.helpers.requestWithAuthentication.call(this, credentialsType, options);
}

export async function apiRequestAllItems(
	this: IHookFunctions | IExecuteFunctions,
	method: IHttpRequestMethods,
	endpoint: string,
	body: IDataObject,
	query: IDataObject = {},
): Promise<any> {
	query.limit = 30;

	query.sort = '-id';

	const returnData: IDataObject[] = [];

	let responseData;

	do {
		responseData = await apiRequest.call(this, method, endpoint, body, query);
		returnData.push.apply(returnData, responseData as IDataObject[]);
		if (responseData.length !== 0) {
			query.before = responseData[responseData.length - 1].id;
		}
	} while (query.limit <= responseData.length);

	return returnData;
}
