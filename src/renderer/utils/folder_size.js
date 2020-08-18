let fileSystem = require('fs')
let getAllFilePaths = require('./get_all_filepaths')

/* Returns the total size of a folder and its files in bytes */

let totalSize = 0

// targetPath = folder to calculate size of
let folderSize = (targetPath) => {

    let filePaths = getAllFilePaths(targetPath)

    filePaths.forEach((filePath) => {
        totalSize += fileSystem.statSync(filePath).size
    })

    return totalSize
}

module.exports = folderSize