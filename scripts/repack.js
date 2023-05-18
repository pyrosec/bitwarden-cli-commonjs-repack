'use strict';

const fs = require('fs-extra');
const path = require('path');
const { mkdirp } = require('mkdirp');
const OUTPUT_DIRECTORY = path.join(__dirname, '..', 'lib');
(async () => {
  await mkdirp(OUTPUT_DIRECTORY);
  const bundle = (await fs.readFile(require.resolve('@bitwarden/cli/build/bw'), 'utf8')).replace('main.run();', 'module.exports = Main;');
  await fs.writeFile(path.join(OUTPUT_DIRECTORY, 'bw-export.js'), bundle);
})().catch((err) => console.error(err));

