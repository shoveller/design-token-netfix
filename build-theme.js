const styleDictionary = require('style-dictionary');
const {makeThemeConfig} = require("./sd-theme-transformer");

console.log('🪩  테마 빌드 START ---------------');
['global', 'dark', 'light'].map((theme) => {
    const SD = styleDictionary.extend(makeThemeConfig({
        source: `design/${theme}.json`,
        buildPath: 'theme/'
    }));
    SD.buildAllPlatforms()
});
console.log('\n🪩  테마 빌드 FINISHED ------------\n');
