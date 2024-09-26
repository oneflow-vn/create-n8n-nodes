import { INodeProperties, ILoadOptionsFunctions, INodeListSearchResult, NodeOperationError } from 'n8n-workflow';
import { apiRequest } from './genericFunctions';


const appTokenLocatorProperty = {
	type: 'resourceLocator',
	default: { mode: 'list', value: '' },
	modes: [
		{
			displayName: 'From List',
			name: 'list',
			type: 'list',
			placeholder: 'Choose...',
			typeOptions: {
				searchListMethod: 'searchDocsApps',
				searchFilterRequired: true,
				searchable: true,
			},
		},
		{
			displayName: 'By URL',
			name: 'url',
			type: 'string',
			placeholder: 'https://trello.com/c/e123456/card-name',
			validation: [
				{
					type: 'regex',
					properties: {
						regex: 'http(s)?://trello.com/c/([a-zA-Z0-9]{2,})/.*',
						errorMessage: 'Not a valid Trello Card URL',
					},
				},
			],
			extractValue: {
				type: 'regex',
				regex: 'https://trello.com/c/([a-zA-Z0-9]{2,})',
			},
		},
		{
			displayName: 'ID',
			name: 'id',
			type: 'string',
			validation: [
				{
					type: 'regex',
					properties: {
						regex: '[a-zA-Z0-9]{2,}',
						errorMessage: 'Not a valid Trello Card ID',
					},
				},
			],
			placeholder: 'wiIaGwqE',
			url: '=https://trello.com/c/{{$value}}',
		},
	],
};

function mapAppTokenProperty(property: INodeProperties) {
	return {
		...property,
		...appTokenLocatorProperty,
	};
}
export function overrideAppTokenProperties(properties: INodeProperties[]) {
	return properties.map((property) => {
		if (property.name === 'app_token') {
			return mapAppTokenProperty(property);
		}
		return property;
	});
}

export async function searchDocsApps(
	this: ILoadOptionsFunctions,
	query?: string,
): Promise<INodeListSearchResult> {
	if (!query) {
		throw new NodeOperationError(this.getNode(), 'Query required for Trello search');
	}
	const searchResults = await apiRequest.call(
		this,
		'POST',
		'/suite/docs-api/search/object',
		{
			docs_types: ['bitable'],
			count: 10,
			search_key: query,
		},
		{},
	);

	return {
		results: searchResults.data.docs_entities.map((b: any) => ({
			name: b.title,
			value: b.docs_token,
			url: `https://open.larksuite.com/suite/docs?docs_token=${b.docs_token}`,
			description: b.docs_type,
		})),
	};
}
