const transform = code => `
(() => {
  console.log('before code')
  const cssCode = ${JSON.stringify(code)}
  return cssCode
 })()
`
module.exports = transform