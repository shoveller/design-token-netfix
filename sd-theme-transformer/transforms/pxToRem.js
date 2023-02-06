const isPx = (/** string */value) => /[\d\.]+px$/.test(value)

/**
 * @type {import('style-dictionary/types').Transform}
 */
module.exports.pxToRem = {
  name: 'pxToRem',
  type: 'value',
  transformer(token) {
    if (isPx(token.value)) {
      const baseFontSize = 16;
      const floatValue = parseFloat(token.value.replace('px', ''));

      if (isNaN(floatValue)) {
        return token.value;
      }

      if (floatValue === 0) {
        return '0';
      }

      return `${floatValue / baseFontSize}rem`;
    }
    return token.value;
  },
}
