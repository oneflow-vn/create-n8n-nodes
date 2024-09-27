# Create N8N node


> Command line tool to create a new N8N node from openAPI specification


## Overview

<div>
<img src="./assets/openapi.svg" width="100" height="100" align="left">
<img src="./assets/n8n.svg" width="100" height="100" align="left">
</div>


This tool creates a new N8N node from an openAPI specification. It generates the node files, credentials, and documentation.

<br>

## Features

- [x] convert postman collection to openAPI
- [x] Merge multiple openAPI files into one
- [x] create node files from openAPI specification
- [x] create credentials file from openAPI specification
- [X] Multiple credentials
- [x] Multiple nodes
- [x] HTTP Routing based nodes
- [X] Custom node properties
- [x] Custom node methods
- [x] Custom node hooks

## Installation

```bash
npm install -g @oneflow-vn/n8n-nodegen (TO BE PUBLISHED)
```

## Usage

```bash
n8n-nodegen --help
```

### Initialize a new package

```bash
n8n-nodegen init --openapi <openapi-file> --template oneflow-vn/n8n-nodes-template --output <output-dir>
```
### Configuration

check the `nodes.config.js` file in the output directory

```js
const path = require('path');

module.exports = {
  packageName: 'n8n-nodes-<name>',
  credentials: {
    yourApi: {
      displayName: 'Your API',
      name: 'firecrawlApi',
      className: 'FirecrawlApi',
      scheme: 'apiKey',
    }
  },
  nodes: {
    yourNode: {
      displayName: 'Your Node',
      name: 'YourNode',
      description: 'Your Node Description',
      openapi: path.resolve(__dirname, 'openapi.yml'),
      icon: 'fa:fire',
      baseUrl: 'https://your-api.com',
      credentials: [{
        displayName: 'Your API',
        name: 'yourApi',
        required: true,
      }],
    },
  },
  // overwrite the generated files
  overwrites: {
    operations: [],
  },
};

```

### code generation

```bash
pnpm run codegen
```

### Overwrite the generated files

We offer two ways to overwrite the generated files:
- Overwrite the generated files by providing the `overwrites` object in the `nodes.config.js` file. This will overwrite the generated operations when running the `codegen` command.
- Hook into the node's properties and methods in runtime by replacing th `hooks` files in the generated node directory.

**Overwrites operations**

```js
  // node.config.js
  // overwrite the generated files
	overwrites: {
		operations: [
      // unset all operations that have the 'Content-Type' header
			{
				has: 'routing.request.headers.Content-Type',
				set: false,
			},
      // match all operations that have the 'type' string and set  default value to ''
			{
				match: {
					type: 'string',
				},
				set: {
					type: 'string',
					default: '',
				},
			},
      // unset all operations that have the 'Authorization' header
			{
				has: 'routing.request.headers.Authorization',
				set: false,
			},
		],
	},

```

**Overwrites by extensions**

In the root project directory, create a `extensions` directory, the structure should be like the generated node directory. The `extensions` directory will contain the files that you want to overwrite.

```bash
- root
  - extensions
    - YourNode
      - resources
        - your-resource
          - hooks.ts
```

Basically, when running the `codegen` command, the tool will copy the files from the `extensions` directory to the generated node directory.

example hooks.ts

```ts
import { INodeProperties, INodeType } from 'n8n-workflow';

export default function runHook(
	properties: INodeProperties[],
): {
	properties: INodeProperties[];
	methods: INodeType['methods'];
} {
	return {
    // do anything with the properties
		properties,
    // all methods that you want to add to the node
		methods: {
        listSearch: {
            searchDocsApps
        }
    },
	};
}
```

## Contributing

Please make sure to read the [Contributing Guide](./CONTRIBUTING.md) before making a pull request.

## Authors

- [oneflow.vn](https://oneflow.vn)

## Code of Conduct

Please make sure to read the [Code of Conduct](./CODE_OF_CONDUCT.md) before making a pull request.

## License

This project is licensed under the [MIT License](./LICENSE).