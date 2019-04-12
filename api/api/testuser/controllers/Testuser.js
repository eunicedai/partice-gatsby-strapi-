'use strict';

/**
 * Testuser.js controller
 *
 * @description: A set of functions called "actions" for managing `Testuser`.
 */

module.exports = {

  /**
   * Retrieve testuser records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.testuser.search(ctx.query);
    } else {
      return strapi.services.testuser.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a testuser record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.testuser.fetch(ctx.params);
  },

  /**
   * Count testuser records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.testuser.count(ctx.query);
  },

  /**
   * Create a/an testuser record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.testuser.add(ctx.request.body);
  },

  /**
   * Update a/an testuser record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.testuser.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an testuser record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.testuser.remove(ctx.params);
  }
};
