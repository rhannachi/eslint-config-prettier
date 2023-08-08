
module.exports = {
  extends: ['./index.js']
    .map(require.resolve)
    .concat([ "plugin:@next/next/recommended"])
}