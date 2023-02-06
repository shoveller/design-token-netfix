const styleDictionary = require('style-dictionary');
const {makeThemeConfig} = require("./sd-theme-transformer");

console.log('🪩  테마 빌드 START ---------------');
// TODO: ['global', 'dark', 'light'] 를 source 로 바꾸어 받도록 수정해보자
['global', 'dark', 'light'].map((theme) => {
    const SD = styleDictionary.extend(makeThemeConfig({
        theme,
        INPUT_DIR: 'data',
        OUTPUT_DIR: 'theme'
    }));
    SD.buildAllPlatforms()
});
console.log('\n🪩  테마 빌드 FINISHED ------------\n');
