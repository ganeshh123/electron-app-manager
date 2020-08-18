let fs = require('fs')
let path = require('path')
let removeDir = require('../src/renderer/utils/folder_delete')

let targetPath = path.join(__dirname, '..', 'static', '/Code Cache')

let exclusions = [
    '15f3998ef8d9e98a_0',
    'f4c8f8a8ec37f4de_0'
]

removeDir(targetPath, exclusions)