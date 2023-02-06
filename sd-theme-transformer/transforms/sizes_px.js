module.exports.sizes_px = {
    name: 'sizes/px',
    type: 'value',
    matcher(prop) {
        const props = 'fontSize spacing borderRadius borderWidth sizing';
        return props.split(' ').includes(prop.attributes.category);
    },
    transformer(prop) {
        return `${parseFloat(prop.original.value, 10)}px`;
    },
}
