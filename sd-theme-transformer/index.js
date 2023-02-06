const {makeCSSTheme, makeSCSSTheme, makeESMTheme, makeCJSTheme} = require("./platforms");

/**
 *
 * @param  {theme: string, INPUT_DIR: string, buildPath: string}
 * @returns {{source: string[], platforms: {platforms.js: {transforms: string[], files: [{destination: string, format: string, selector: (string|string)}], buildPath: string}, scss: {transforms: string[], files: [{destination: string, format: string}], buildPath: string}, js: {transforms: string[], files: [{destination: string, format: string}], buildPath: string}, jsModule: {transforms: string[], files: [{destination: string, format: string}], buildPath: string}}}}
 */
module.exports.makeThemeConfig = ({theme, INPUT_DIR, buildPath}) => {
    return {
        source: [`${INPUT_DIR}/${theme}.json`],
        platforms: {
            css: makeCSSTheme(theme, buildPath),
            scss: makeSCSSTheme(theme, buildPath),
            esm: makeESMTheme(theme, buildPath),
            cjs: makeCJSTheme(theme, buildPath),
        },
    };
};
