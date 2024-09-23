# apifire

A support library designed to work with the `yeoman` generator, 
[`apifire-server`](https://github.com/theogravity/apifire-server).

It takes an OpenAPI 3 spec, and generates routes, controllers, and validators for express in Typescript.

This library is a work-in-progress (alpha level, in my opinion), and works specifically with the
author's use-cases.

It's been tested with the following files:

- `tests/openapi3/petstore.yaml`
- `tests/openapi3/bt-example.yaml`
- `tests/openapi3/spotlight-example.yaml`

Notes:

- It is recommended that you use [`Stoplight Studio`](https://stoplight.io/studio) to design your OpenAPI spec
  * For a well-designed example using Stoplight Studio, see [this OpenAPI definition](https://github.com/theogravity/immutable-x-openapi)
- For responses, only 200 responses are used with JSON response bodies.
- It is recommended to create an OpenAPI component type for request bodies and responses (aka Model in Stoplight Studio)
- Cookies / headers / auth definitions are not used
- `$ref` is supported in responses and parameters
- Use `parameters` to define non-post body params, use `requestBody` for body params
- Content type `application/json` is only supported for `requestBody` and responses
- Very basic `securitySchemes` support - only the first `security` definition is used to protect an endpoint
- Post / response bodies *must* be an object type. It *cannot* be an array. You can have properties that are of any type in that object, however.

# Table of Contents

<!-- TOC -->
- [Fork notice](#fork-notice)
  - [Changes](#changes)
- [Install](#install)
- [Usage](#usage)
  - [Quick usage](#quick-usage)
  - [CLI reference](#cli-reference)
- [Sample output](#sample-output)
  - [Interfaces](#interfaces)
  - [Router](#router)
  - [Validator](#validator)
  - [Controller](#controller)
- [Authors](#authors)

<!-- TOC END -->

## Fork notice

This library is a fork of the [`openapi3-generator`](https://github.com/openapi-contrib/openapi3-generator) project.

### Changes

- Uses a custom `json-schema-ref-parser-alt` build that adds a `x-original-ref` property as a reference to the 
original `$ref` to the output schema, which is useful for static analysis when trying to generate types.
- The templates that came with `openapi3-generator` were removed.
- A new set of templates were added to work with `apifire-server`.
- A prettifier was introduced to prettify the generated Typescript files.

## Install

To use it from the CLI:

```bash
npm install -g apifire
```

## Usage

### Quick usage

In the directory where the `apifire-server` generated service is, run:

`$ apifire api.yaml api-server`

Where `api.yaml` is the OpenAPI 3 spec file. You should always run this command whenever the spec
file changes.

This will generate the following structure:

```
/<service root>
├── src/
|   ├── controllers-generated/
|   |   └──  <operation>.ts
|   ├── interfaces/
|   |   └──  api.ts
|   ├── routers/
|   |   ├── <operation>.router.ts
|   |   ├── validators/
|   |   |   └── <operation>.validator.ts
```

In day-to-day usage, the `controllers-generated/` directory contains the files that you may edit / pluck
to the service's `controllers/` directory as you will implement your business logic in them.

The other directories and their files should never be modified.

### CLI reference

```bash
  Usage: apifire [options] <openapiFileOrURL> <template>

  Options:

    -V, --version                  output the version number
    -o, --output <outputDir>       directory where to put the generated files (defaults to current directory)
    -t, --templates <templateDir>  directory where templates are located (defaults to internal templates directory)
    -b, --basedir <baseDir>        directory to use as the base when resolving local file references (defaults to OpenAPI file directory)
    -h, --help                     output usage information
```

## Sample output

[Stoplight Studio](https://stoplight.io/studio/) is a recommended way to design your OpenAPI spec.

The following items were generated using the `tests/openapi3/stoplight-example.yaml` file.

### Interfaces

```typescript
export interface CreateAccountParams {
  /**
   * Account email
   */
  email: string
  /**
   * Hashed password
   */
  passHash: string
  /**
   * Authentication type
   */
  authType: string
  /**
   * Code to verify account
   */
  verifyCode: string

  /**
   * Account id in path
   */
  pAccountId: string
}

export interface CreateAccountResponse {
  status?: number
  /**
   * Created account id
   */
  id?: string
}
```

### Router

```typescript
/**
 * Creates a new account
 */
router.post(
  '/:pAccountId',
  async (req: IRequest, res: Response, next: NextFunction) => {
    const params: ApiInterfaces.CreateAccountParams = {
      pAccountId: (req.params.pAccountId as unknown) as string,

      email: (req.body.email as unknown) as string,
      passHash: (req.body.passHash as unknown) as string,
      authType: (req.body.authType as unknown) as string,
      verifyCode: (req.body.verifyCode as unknown) as string
    }

    try {
      validateCreateAccountParams(params)

      const result = await createAccount(req.context, params)
      res.status(result.status || 200)

      delete result.status

      res.send(result)
    } catch (err) {
      next(err)
    }
  }
)
```

### Validator

`apifire` generates validators that validate the incoming request parameters.

```typescript
const createAccountValidator = ajv.compile({
  type: 'object',
  required: ['pAccountId', 'email', 'passHash', 'authType', 'verifyCode'],
  properties: {
    pAccountId: { type: 'string' },
    email: {
      type: 'string',
    },
    passHash: {
      type: 'string',
    },
    authType: {
      type: 'string',
    },
    verifyCode: {
      type: 'string',
    }
  }
})

export function validateCreateAccountParams (params) {
  const valid = createAccountValidator(params)

  if (!valid) {
    throw getErrRegistry()
      .newError('VALIDATION_FAILURE', 'INVALID_REQ_PARAMS')
      .withSafeMetadata({
        validations: createAccountValidator.errors
      })
  }
}
```

### Controller

You fill in your business logic in a controller, which is called by the router.

```typescript
/**
 * @param {IRequestContext} context
 * @param {Object} params
 * @throws {Error}
 * @return {Promise}
 */
export async function createAccount (
  context: IRequestContext,
  params: ApiInterfaces.CreateAccountParams
): Promise<ApiInterfaces.CreateAccountResponse> {

  return {
    id: ''
  }
}
```

## Authors

* Theo Gravity ([github](http://github.com/richardklose))
* Fran Méndez ([@fmvilas](http://twitter.com/fmvilas))
* Richard Klose ([@richardklose](http://github.com/richardklose))
