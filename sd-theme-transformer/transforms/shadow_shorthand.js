const transformShadow = (shadow) => {
    const { x, y, blur, spread, color } = shadow;
    return `${x} ${y} ${blur} ${spread} ${color}`;
}

module.exports.shadow_shorthand = {
    name: 'shadow/shorthand',
    type: 'value',
    transitive: true,
    matcher: (token) => ['boxShadow'].includes(token.type),
    transformer(token) {
        return Array.isArray(token.original.value)
            ? token.original.value.map((single) => transformShadow(single)).join(', ')
            : transformShadow(token.original.value);
    },
}
