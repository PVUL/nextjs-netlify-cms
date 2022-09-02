module.exports = {
  // type check typescript files
  '**/*.(ts|tsx)': () => 'yarn type-check --noEmit',

  // lint and format typescript and javascript
  '**/*.(ts|tsx|js)': (filenames) => [
    `yarn eslint --fix ${filenames.join(' ')}`,
    `yarn prettier --write ${filenames.join(' ')}`,
  ],

  // format markdown and json
  '**/*.(md|json)': (filenames) => `yarn prettier --write ${filenames.join(' ')}`,
}
