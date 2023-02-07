const {camelCase} = require("lodash");

/**
 * @type {import('style-dictionary/types').Transform}
 */
module.exports.name_esm = {
    name: 'name/esm',
    type: 'name',
    transformer(token) {
        return `${token.type}_${camelCase(token.path.join('_'))}`;
    },
}
