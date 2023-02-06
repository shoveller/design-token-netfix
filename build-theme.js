const styleDictionary = require('style-dictionary');
const {makeThemeConfig} = require("./sd-theme-transformer");

console.log('🪩  테마 빌드 START ---------------');
['global', 'dark', 'light'].map((theme) => {
    const SD = styleDictionary.extend(makeThemeConfig(theme));
    ['css', 'scss', 'js', 'jsModule'].map((platform) => SD.buildPlatform(platform));
});
console.log('\n🪩  테마 빌드 FINISHED ------------\n');
