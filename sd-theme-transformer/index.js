const {makeCSSTheme, makeSCSSTheme, makeESMTheme, makeCJSTheme} = require("./platforms");

/**
 *
 * @param  {theme: string, INPUT_DIR: string, buildPath: string}
 * @returns {import('style-dictionary/types').Config}
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
