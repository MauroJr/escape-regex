'use strict';
const toString = Object.toString;

module.exports = escapeRegex;

/**
 * Escape regex special characters in `string`.
 *
 * @param {String} string
 * @return {String}
 * @api public
 */

function escapeRegex(string){
    return toString(string).replace(/([?!${}*:()|=^[\]\/\\.+])/g, '\\$1');
}