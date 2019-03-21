#!/usr/bin/env node
try {
  const path = require('path');
  const { writeFileSync } = require('fs');
  const filename = process.env.FILENAME || 'version';
  const PACKAGE_PATH = process.argv0;
  const { version } = require(path.resolve(PACKAGE_PATH));
  const done = writeFileSync(path.resolve('./'), version, 'utf8');
  if (done) {
    console.info('DONE', 'version', done);
  process.exit(0);
  } else {
    console.error(done);
    process.exit(1);
  }
} catch (e) {
  console.error(e);
  process.exit(1);
}