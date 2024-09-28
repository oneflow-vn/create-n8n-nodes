#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const program = require('commander');
const { inspect } = require('util');
const packageInfo = require('./package.json');
const generator = require('./lib/generator');
const _ = require('lodash');

// const dupeInterfaceRemover = require('./lib/remove-dupe-interfaces');

const red = text => `\x1b[31m${text}\x1b[0m`;
const magenta = text => `\x1b[35m${text}\x1b[0m`;
const yellow = text => `\x1b[33m${text}\x1b[0m`;
const green = text => `\x1b[32m${text}\x1b[0m`;

let openapiFile;
let template;
let baseDir;

const parseOutput = dir => path.resolve(dir);

program
  .version(packageInfo.version)
  .arguments('<openapiFileOrURL> <template>')
  .action((openapiFilePath, tmpl) => {
    if (!openapiFilePath.startsWith('http:') && !openapiFilePath.startsWith('https:')) {
      openapiFile = path.resolve(openapiFilePath);
      baseDir = path.dirname(openapiFile);
    } else {
      openapiFile = openapiFilePath;
    }

    template = tmpl;
  })
  .option('-o, --output <outputDir>', 'directory where to put the generated files (defaults to current directory)', parseOutput, process.cwd())
  .option('-t, --templates <templateDir>', 'directory where templates are located (defaults to internal nodejs templates)')
  .option('-b, --basedir <baseDir>', 'directory to use as the base when resolving local file references (defaults to OpenAPI file directory)')
  .option('-n, --name <name>', 'name of the generated Node')
  .option('-c, --config <configFile>', 'configuration file to use')
  .parse(process.argv);

if (!openapiFile) {
  console.error(red('> Path to OpenAPI file not provided.'));
  program.help(); // This exits the process
}

const options = program.opts();

if (options.config) {
  options.config = loadConfigFile(options);
}

console.log(yellow('Generating Nodes'));

if (options.config && options.config.nodes) {
  runMultipleGenerators(options);
} else {
  runGenerator(options);
}

process.on('unhandledRejection', (err) => console.error(err));

function runMultipleGenerators (options) {
  const { name } = options;
  for (const [key, node] of Object.entries(options.config.nodes)) {

    if (node.disabled) {
      console.log(yellow('Skipping Node'), key);
      continue;
    }

    if (name && key !== name) {
      continue;
    }

    const nodeOptions = _.merge({}, options, node);
    runGenerator(nodeOptions);
  }
}

function runGenerator (options) {
  console.log(yellow('Generating Node'), options.name || '');

  generator.generate({
    openapi: openapiFile,
    base_dir: options.basedir || baseDir || process.cwd(),
    target_dir: options.output,
    templates: options.templates ? path.resolve(process.cwd(), options.templates) : undefined,
    curl: options.curl,
    template,
    skipExistingFiles: options.skipExistingFiles,
    deleteFolders: options.deleteFolders,
    displayName: options.displayName,
    name: options.name,
    description: options.description,
    tags: options.tags || null,
    config: options.config,
    packageName: options.config.packageName && options.packageName,
    icon: options.icon,
    baseUrl: options.baseUrl,
    credentials: options.credentials,
  }).then(() => {
    // TODO: Remove this when the issue is fixed
    // dupeInterfaceRemover(path.resolve(options.output, 'src', 'interfaces', 'api.ts'));
    console.log(green('Done! ✨'));
    console.log(yellow('Check out your shiny new API at ') + magenta(options.output) + yellow('.'));
  }).catch(err => {
    console.error(red('Aaww 💩. Something went wrong:'));
    console.error(red(err.stack || err.message || inspect(err, { depth: null })));
  });
}

function loadConfigFile (options) {
  const configFile = path.resolve(process.cwd(), options.config);

  // read file synchronously
  const config = fs.readFileSync(configFile, 'utf8');

  // parse file content
  if (options.config.endsWith('.json')) {
    return JSON.parse(config);
  }

  if (options.config.endsWith('.js')) {
    return require(configFile);
  }
}
