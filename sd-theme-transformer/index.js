const {pxToRem} = require("./transforms/pxToRem");
const {name_js} = require("./transforms/name_js");
const {sizes_px} = require("./transforms/sizes_px");
const {typography_shorthand} = require("./transforms/typography_shorthand");
const {shadow_shorthand} = require("./transforms/shadow_shorthand");
const {name_js_es6} = require("./transforms/name_js_es6");
const {css_variables} = require("./formats/css_variables");
const {javascript_module} = require("./formats/javascript_module");
const styleDictionary = require('style-dictionary');

/**
 * 포메터 등록
 */
styleDictionary.registerFormat(css_variables);
styleDictionary.registerFormat(javascript_module);

/**
 * 트랜스포머 등록
 */
styleDictionary.registerTransform(name_js_es6);
styleDictionary.registerTransform(sizes_px);
styleDictionary.registerTransform(pxToRem);
styleDictionary.registerTransform(shadow_shorthand);
styleDictionary.registerTransform(typography_shorthand);
styleDictionary.registerTransform(name_js);

const INPUT_DIR = 'data';

// 출력 디렉토리 이름
const OUTPUT_DIR = 'theme';

const setCSS = (/** string */  theme) => ({
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

const setSCSS = (/** string */  theme) => ({
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

const setJS = (/** string */ theme) => ({
    buildPath: `${OUTPUT_DIR}/`,
    transforms: ['name/js/es6', 'pxToRem'],
    files: [
        {
            destination: `js/esm/${theme}.js`,
            format: `javascript/es6`,
        },
    ],
});

const setJsModule = (/** string */ theme) => ({
    buildPath: `${OUTPUT_DIR}/`,
    transforms: ['pxToRem'],
    files: [
        {
            destination: `js/module/${theme}.js`,
            format: `javascript/module`,
        },
    ],
});

module.exports.makeThemeConfig = (/** string */ theme) => ({
    source: [`${INPUT_DIR}/${theme}.json`],
    platforms: {
        css: setCSS(theme),
        scss: setSCSS(theme),
        js: setJS(theme),
        jsModule: setJsModule(theme),
    },
});
