module.exports.name_js_es6 = {
    name: 'name/js/es6',
    type: 'name',
    transformer(token) {
        const tokenPath = token.path.join(' ');
        const tokenPathItems = tokenPath.split(' ');
        for (let i = 0, l = tokenPathItems.length; i < l; ++i) {
            tokenPathItems[i] =
                tokenPathItems[i].charAt(0).toUpperCase() + tokenPathItems[i].slice(1);
        }

        return tokenPathItems.join('');
    },
}
