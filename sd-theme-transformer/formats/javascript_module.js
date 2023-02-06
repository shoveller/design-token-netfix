const { formatHelpers: { fileHeader } } = require('style-dictionary');

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
                tree[name] = recursiveleyFlattenDictionary(obj[name]);
            }
        }
    }
    return tree;
};

module.exports.javascript_module = {
    name: 'javascript/module',
    formatter({ dictionary, file }) {
        return (
            fileHeader({ file }) +
            'module.exports = ' +
            JSON.stringify(recursiveleyFlattenDictionary(dictionary.tokens), null, 2)
        );
    },
}
