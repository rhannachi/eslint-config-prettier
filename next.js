
module.exports = {
  extends: ['./index.js']
    .map(require.resolve)
    .concat([ "next", "next/core-web-vitals"])
}