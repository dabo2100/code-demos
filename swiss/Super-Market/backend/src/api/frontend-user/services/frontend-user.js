'use strict';

/**
 * frontend-user service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::frontend-user.frontend-user');
