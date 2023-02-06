const StyleDictionaryModule = require('style-dictionary')
const {makeSdTailwindConfig} = require('sd-tailwindcss-transformer')

const StyleDictionary = StyleDictionaryModule.extend(
    makeSdTailwindConfig({
        type: 'all',
        source: ['data/global.json'],
        buildPath: 'theme/',
        // isVariables: true,
        tailwind: {
            content: ['./index.html', './src/**/*.html', './src/**/*.{js,ts,jsx,tsx}'],
            darkMode: "class"
        },
    })
)

StyleDictionary.buildAllPlatforms()
