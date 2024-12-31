'use strict';

/**
 * product-cat service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::product-cat.product-cat');
