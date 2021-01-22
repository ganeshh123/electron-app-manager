let path = require('path')
let folderSize = require('../src/utils/folder_size')

let targetPath = path.join(__dirname, '..', 'static', '/Code Cache')

console.log('Result of Folder Size Test : ')
console.log(folderSize(targetPath))