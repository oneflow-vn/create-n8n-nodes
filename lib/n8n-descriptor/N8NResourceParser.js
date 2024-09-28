const {
  DefaultResourceParser,
} = require('@devlikeapro/n8n-openapi-node');
const { normalizeName } = require('./utils');

class N8NResourceParser extends DefaultResourceParser {
  constructor (config) {
    super();
    this.config = config;

    this.isFiltered = config.isFiltered;
    this.tags = config.tags;
  }

  name (resource) {
    const { name } = resource;

    const slugs = name.split('>');
    const lastSlug = slugs[slugs.length - 1];

    return normalizeName(lastSlug);
  }

  shouldSkip (resource) {
    if (this.isFiltered && !this.isResourceAllowed(resource)) {
      return true;
    }

    return false;
  }

  shouldSkipOperation (operation) {
    if (!this.isFiltered) {
      return false;
    }

    const tags = (operation.tags || []).map((tag) => ({ name: tag }));

    for (const tag of tags) {
      if (this.isResourceAllowed(tag)) {
        return false;
      }
    }

    return true;
  }

  isResourceAllowed (resource) {
    const resourceTag = resource.name;
    for (const tag of this.tags) {
      // filter regex
      if (tag instanceof RegExp && tag.test(resourceTag)) {
        return true;
      }
      // filter string
      if (tag === resourceTag) {
        return true;
      }
    }
  }
}

module.exports = N8NResourceParser;