let fileSystem = require('fs')
let path = require('path')

/* Returns an array consisting of the paths of all the files (recursive) in a folder */

// targetPath = folder to get all filepaths from
let getAllFilePaths = (targetPath, filePaths) => {

  let filePathsFunction = filePaths

  if(!fileSystem.existsSync(targetPath)){
    return filePathsFunction
  }
  let files = fileSystem.readdirSync(targetPath)

  files.forEach((fileName) => {
    if (fileSystem.statSync(path.join(targetPath, fileName)).isDirectory()) {
      filePathsFunction = getAllFilePaths(path.join(targetPath, fileName), filePathsFunction)
    } else {
      filePathsFunction.push(path.join(targetPath, fileName))
    }
  })

  return filePathsFunction
}

module.exports = getAllFilePaths