const StyleDictionaryModule = require('style-dictionary')
const { makeSdTailwindConfig } = require('sd-tailwindcss-transformer')
const path = require('path')

/** @type {import('tailwindcss').Config} */
const tailwind = {
    content: ['./index.html', './src/**/*.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: "class"
}

const StyleDictionary = StyleDictionaryModule.extend(
    makeSdTailwindConfig({
        type: 'all',
        source: ['data/global.json'],
        buildPath: 'theme/',
        tailwind,
    })
)

StyleDictionary.buildAllPlatforms()
