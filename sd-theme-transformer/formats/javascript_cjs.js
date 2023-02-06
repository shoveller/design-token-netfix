const { formatHelpers: { fileHeader } } = require('style-dictionary');
const {camelCase} = require('lodash')

const recursiveleyFlattenDictionary = (obj) => {
    const tree = {};
    if (typeof obj !== 'object' || Array.isArray(obj)) {
        return obj;
    }

    if (obj.hasOwnProperty.call(obj, 'value')) {
        return obj.value;
    } else {
        for (const name in obj) {
            if (obj.hasOwnProperty.call(obj, name)) {
                tree[camelCase(name)] = recursiveleyFlattenDictionary(obj[name]);
            }
        }
    }
    return tree;
};

module.exports.javascript_cjs = {
    name: 'javascript/cjs',
    formatter({ dictionary, file }) {
        return (
            fileHeader({ file }) +
            'module.exports = ' +
            JSON.stringify(recursiveleyFlattenDictionary(dictionary.tokens), null, 2)
        );
    },
}
