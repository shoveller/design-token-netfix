/**
 * @type {import('style-dictionary/types').Transform}
 */
module.exports.sizes_px = {
    name: 'sizes/px',
    type: 'value',
    matcher(token) {
        const props = 'fontSize spacing borderRadius borderWidth sizing';
        return props.split(' ').includes(token.type);
    },
    transformer(prop) {
        return `${parseFloat(prop.original.value, 10)}px`;
    },
}
