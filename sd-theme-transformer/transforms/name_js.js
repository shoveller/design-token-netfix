/**
 * JavaScript 변수 이름 포멧
 * 예: `namespace.item.variant.property.modifier`
 * @type {{name: string, transformer: (function(*): *), type: string}}
 */
module.exports.name_js = {
    name: 'name/js',
    type: 'name',
    transformer: (token) => token.path.join('.'),
}
