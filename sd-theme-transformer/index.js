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
            css: makeCSSTheme({
                buildPath,
                destination: `css/${theme}.css`,
                selector: theme.includes('global') ? ':root' : `.${theme}-theme`
            }),
            scss: makeSCSSTheme({
                buildPath,
                destination: `scss/${theme}.scss`
            }),
            esm: makeESMTheme({
                buildPath,
                destination: `js/esm/${theme}.js`
            }),
            cjs: makeCJSTheme({
                buildPath,
                destination: `js/cjs/${theme}.js`
            }),
        },
    };
};
