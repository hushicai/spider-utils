/**
 * @file simple test case
 * @author hushicai(bluthcy@gmail.com)
 */

const path = require('path');
const fs = require('fs');
const pfs = promisify(fs.readdir, fs);
const dir = path.resolve(__dirname, './');

// promisify ————————————————————————————
import {promisify} from '../';

pfs(dir).then((files) => {
  console.log(files);
});
