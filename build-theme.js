const styleDictionary = require('style-dictionary');
const {makeThemeConfig} = require("./sd-theme-transformer");

console.log('🪩  테마 빌드 START ---------------');
['design/global.json', 'design/dark.json', 'design/light.json'].forEach((source) => {
    const SD = styleDictionary.extend(makeThemeConfig({
        source,
        buildPath: 'theme/'
    }));
    SD.buildAllPlatforms()
});
console.log('\n🪩  테마 빌드 FINISHED ------------\n');
