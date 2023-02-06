const {camelCase} = require("lodash");

/**
 * @type {import('style-dictionary/types').Transform}
 */
module.exports.name_esm = {
    name: 'name/esm',
    type: 'name',
    transformer(token) {
        const tokenPath = token.path.join(' ');
        const tokenPathItems = tokenPath.split(' ');
        for (let i = 0, l = tokenPathItems.length; i < l; ++i) {
            tokenPathItems[i] =
                tokenPathItems[i].charAt(0).toUpperCase() + tokenPathItems[i].slice(1);
        }

        return camelCase(tokenPathItems.join(''));
    },
}
