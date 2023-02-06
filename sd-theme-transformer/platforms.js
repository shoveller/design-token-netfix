const {pxToRem} = require("./transforms/pxToRem");
const {name_js} = require("./transforms/name_js");
const {sizes_px} = require("./transforms/sizes_px");
const {typography_shorthand} = require("./transforms/typography_shorthand");
const {shadow_shorthand} = require("./transforms/shadow_shorthand");
const {name_esm} = require("./transforms/name_esm");
const {css_variables} = require("./formats/css_variables");
const {javascript_cjs} = require("./formats/javascript_cjs");
const styleDictionary = require('style-dictionary');

/**
 * 포메터 등록
 */
styleDictionary.registerFormat(css_variables);
styleDictionary.registerFormat(javascript_cjs);

/**
 * 트랜스포머 등록
 */
styleDictionary.registerTransform(name_esm);
styleDictionary.registerTransform(sizes_px);
styleDictionary.registerTransform(pxToRem);
styleDictionary.registerTransform(shadow_shorthand);
styleDictionary.registerTransform(typography_shorthand);
styleDictionary.registerTransform(name_js);

/**
 *
 * @param {buildPath: string, destination: string, selector: string}
 * @returns {import('style-dictionary/types').Platform}
 */
module.exports.makeCSSTheme = ({ buildPath, destination, selector = ':root' }) => ({
    buildPath,
    transforms: [
        'attribute/cti',
        'name/cti/kebab',
        'sizes/px',
        'shadow/shorthand',
        'pxToRem',
        'typography/shorthand',
    ],
    files: [
        {
            destination,
            format: 'css/variables',
            selector,
        },
    ],
});

/**
 *
 * @param {buildPath: string, destination: string}
 * @returns {import('style-dictionary/types').Platform}
 */
module.exports.makeSCSSTheme = ({ buildPath, destination }) => ({
    buildPath,
    transforms: [
        'attribute/cti',
        'name/cti/kebab',
        'sizes/px',
        'shadow/shorthand',
        'pxToRem',
        'typography/shorthand',
    ],
    files: [
        {
            destination,
            format: `scss/variables`,
        },
    ],
});

/**
 *
 * @param {buildPath: string, destination: string}
 * @returns {import('style-dictionary/types').Platform}
 */
module.exports.makeESMTheme = ({ buildPath, destination }) => ({
    buildPath,
    transforms: ['name/esm', 'pxToRem'],
    files: [
        {
            destination,
            format: `javascript/es6`,
        },
    ],
});

/**
 *
 * @param {buildPath: string, destination: string}
 * @returns {import('style-dictionary/types').Platform}
 */
module.exports.makeCJSTheme = ({ buildPath, destination }) => ({
    buildPath,
    transforms: ['pxToRem'],
    files: [
        {
            destination,
            format: `javascript/cjs`,
        },
    ],
});
