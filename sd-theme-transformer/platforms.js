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

module.exports.makeCSSTheme = (/** string */  theme,/** string */ buildPath) => ({
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
            destination: `css/${theme}.css`,
            format: 'css/variables',
            selector: theme.includes('global') ? ':root' : `.${theme}-theme`,
        },
    ],
});

module.exports.makeSCSSTheme = (/** string */  theme,/** string */ buildPath) => ({
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
            destination: `scss/${theme}.scss`,
            format: `scss/variables`,
        },
    ],
});

module.exports.makeESMTheme = (/** string */  theme,/** string */ buildPath) => ({
    buildPath,
    transforms: ['name/esm', 'pxToRem'],
    files: [
        {
            destination: `js/esm/${theme}.js`,
            format: `javascript/es6`,
        },
    ],
});

module.exports.makeCJSTheme = (/** string */  theme,/** string */ buildPath) => ({
    buildPath,
    transforms: ['pxToRem'],
    files: [
        {
            destination: `js/cjs/${theme}.js`,
            format: `javascript/cjs`,
        },
    ],
});
