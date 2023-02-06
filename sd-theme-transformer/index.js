const {pxToRem} = require("./transforms/pxToRem");
const {name_js} = require("./transforms/name_js");
const {sizes_px} = require("./transforms/sizes_px");
const {typography_shorthand} = require("./transforms/typography_shorthand");
const {shadow_shorthand} = require("./transforms/shadow_shorthand");
const {name_js_es6} = require("./transforms/name_js_es6");
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
styleDictionary.registerTransform(name_js_es6);
styleDictionary.registerTransform(sizes_px);
styleDictionary.registerTransform(pxToRem);
styleDictionary.registerTransform(shadow_shorthand);
styleDictionary.registerTransform(typography_shorthand);
styleDictionary.registerTransform(name_js);

const setCSS = (/** string */  theme,/** string */ OUTPUT_DIR) => ({
    buildPath: `${OUTPUT_DIR}/`,
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

const setSCSS = (/** string */  theme,/** string */ OUTPUT_DIR) => ({
    buildPath: `${OUTPUT_DIR}/`,
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

const setJS = (/** string */  theme,/** string */ OUTPUT_DIR) => ({
    buildPath: `${OUTPUT_DIR}/`,
    transforms: ['name/js/es6', 'pxToRem'],
    files: [
        {
            destination: `js/esm/${theme}.js`,
            format: `javascript/es6`,
        },
    ],
});

const setJsModule = (/** string */  theme,/** string */ OUTPUT_DIR) => ({
    buildPath: `${OUTPUT_DIR}/`,
    transforms: ['pxToRem'],
    files: [
        {
            destination: `js/cjs/${theme}.js`,
            format: `javascript/cjs`,
        },
    ],
});

/**
 *
 * @param  {theme: string, INPUT_DIR: string, OUTPUT_DIR: string}
 * @returns {{source: string[], platforms: {css: {transforms: string[], files: [{destination: string, format: string, selector: (string|string)}], buildPath: string}, scss: {transforms: string[], files: [{destination: string, format: string}], buildPath: string}, js: {transforms: string[], files: [{destination: string, format: string}], buildPath: string}, jsModule: {transforms: string[], files: [{destination: string, format: string}], buildPath: string}}}}
 */
module.exports.makeThemeConfig = ({theme, INPUT_DIR, OUTPUT_DIR }) => ({
    source: [`${INPUT_DIR}/${theme}.json`],
    platforms: {
        css: setCSS(theme, OUTPUT_DIR),
        scss: setSCSS(theme, OUTPUT_DIR),
        js: setJS(theme, OUTPUT_DIR),
        jsModule: setJsModule(theme, OUTPUT_DIR),
    },
});
