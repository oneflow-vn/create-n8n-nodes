import { INodeProperties, INodeType } from 'n8n-workflow';
import { overrideAppTokenProperties, searchDocsApps } from './appToken';

function compose(...fns: Function[]) {
	return (x: any) => fns.reduce((v, f) => f(v), x);
}

export default function runHook(
	properties: INodeProperties[],
): {
	properties: INodeProperties[];
	methods: INodeType['methods'];
} {
	const processProperties = compose(overrideAppTokenProperties);

	return {
		properties: processProperties(properties),
		methods: {
            listSearch: {
                searchDocsApps
            }
        },
	};
}
