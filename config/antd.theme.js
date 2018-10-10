/**
 * Created by moon on 2017/9/24.
 */
const path = require('path');
const fs = require('fs');
const lessToJs = require('less-vars-to-js');
const themeVariables = lessToJs(fs.readFileSync(path.join(process.cwd(), './ant-theme-vars.less'), 'utf8'));

module.exports = themeVariables;

