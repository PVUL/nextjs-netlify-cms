module.exports = {
  // type check typescript files
  '**/*.(ts|tsx)': () => 'yarn type-check --noEmit',

  // lint typescript and javascript
  '**/*.(ts|tsx|js)': () => 'yarn lint-fix',

  // prettify staged files
  '**/*.(ts|tsx|js|md|json)': () => 'yarn pretty-quick --staged',
}
