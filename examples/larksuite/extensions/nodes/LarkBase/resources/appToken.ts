import { INodeProperties, ILoadOptionsFunctions, INodeListSearchResult, NodeOperationError } from 'n8n-workflow';
import { apiRequest } from './genericFunctions';


const appTokenLocatorProperty: INodeProperties = {
		displayName: 'App Token',
		name: 'app_token',
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
        // {
        //     displayName: 'By URL',
        //     name: 'url',
        //     type: 'string',
        //     // https://oneflowvn.sg.larksuite.com/base/NVCnbrChXaPbhVs8bISltEhngFg?table=tblw3edjUuhDndRz&view=vewc0lt1i1
        //     placeholder: 'https://your.larksuite.com/base/yourapp?table=tblw3edjUuhDndRz&view=vewc0lt1i1',
        //     validation: [
        //         {
        //             type: 'regex',
        //             properties: {
        //                 // regex: any subdomain.any region.larksuite.com/base/any alphanumeric string?/any thing
        //                 regex: 'https://[a-zA-Z0-9]+.[a-zA-Z0-9]+.larksuite.com/base/[a-zA-Z0-9]+',
        //                 errorMessage: 'Not a valid LarkSuite App URL',
        //             },
        //         },
        //     ],
        //     extractValue: {
        //         type: 'regex',
        //         // extract the app token from the URL /basee/any alphanumeric string?anything => any alphanumeric string
        //         regex: '*.larksuite.com/base/([a-zA-Z0-9]+)',
        //     },
        // },
        {
            displayName: 'ID',
            name: 'id',
            type: 'string',
            validation: [
                {
                    type: 'regex',
                    properties: {
                        regex: '[a-zA-Z0-9]+',
                        errorMessage: 'Not a valid LarkSuite App ID',
                    },
                },
            ],
            placeholder: 'NVCnbrChXaPbhVs8bISltEhngFg',
						url: '=http://api-base-url.com/?id={{$value}}',
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
