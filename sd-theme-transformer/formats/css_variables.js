module.exports.css_variables = {
    name: 'css/variables',
    formatter(dictionary /* , config */) {
        return `${this.selector} {${dictionary.allProperties
            .map(({name, value}) => `  --${name}: ${value};`)
            .join('\n')}}`;
    },
}
