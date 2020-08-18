let fs = require('fs')
let path = require('path')
let getAllFilePaths = require('../src/renderer/utils/get_all_filepaths')

let targetPath = path.join(__dirname, '..', 'static', '/Code Cache')

console.log('Result of Get All Filepaths Test : ')
console.log(getAllFilePaths(targetPath))