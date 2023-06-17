'use strict';

/**
 * personal-data service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::personal-data.personal-data');
