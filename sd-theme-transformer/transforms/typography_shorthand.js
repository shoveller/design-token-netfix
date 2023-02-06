module.exports.typography_shorthand = {
    name: 'typography/shorthand',
    type: 'value',
    transitive: true,
    matcher: (token) => token.type === 'typography',
    transformer(token) {
        const { value } = token;
        return `${value.fontWeight} ${value.fontSize}/${value.lineHeight} ${value.fontFamily}`;
    },
}
