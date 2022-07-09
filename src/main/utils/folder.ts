import * as fs from 'fs'
import * as path from 'path'

// Returns true if folder at path is empty, false otherwise
export const getFolderEmpty = (path: string): boolean => {
  return fs.readdirSync(path).length === 0
}

// Returns an array consisting of the paths of all the files (recursive) in a folder
export const getFolderFilePaths = (targetPath: string): string[] => {
  let filePaths: string[] = []
  if (!fs.existsSync(targetPath)) {
    return filePaths
  }
  const files: string[] = fs.readdirSync(targetPath)

  files.forEach((fileName) => {
    if (fs.statSync(path.join(targetPath, fileName)).isDirectory()) {
      // If directory, scan that directory and add everything in there
      filePaths = [
        ...filePaths,
        ...getFolderFilePaths(path.join(targetPath, fileName)),
      ]
    } else {
      // Add the file's path to the list
      filePaths.push(path.join(targetPath, fileName))
    }
  })

  return filePaths
}

// Returns the total size of a folder and its files in bytes
export const getFolderSize = (targetPath: string): number => {
  let totalSize: number = 0
  let filePaths: string[] = getFolderFilePaths(targetPath)

  filePaths.forEach((filePath) => {
    totalSize += fs.statSync(filePath).size
  })

  return totalSize
}

export const deleteFolder = (
  targetPath: string,
  exclusions: string[]
): void => {
  if (fs.existsSync(targetPath) === false) {
    return
  }

  // Ensure that files from exclusions array are not deleted
  const filesToDelete = fs.readdirSync(targetPath).filter((file) => {
    if (exclusions) {
      return !exclusions.includes(file)
    } else {
      return file
    }
  })

  // If there are still files in the target folder to delete
  if (filesToDelete.length > 0) {
    // If filename is a folder, then recursively run function on that folder, otherwise delete the file
    filesToDelete.forEach((filename) => {
      if (fs.statSync(targetPath + '/' + filename).isDirectory()) {
        deleteFolder(path.join(targetPath, filename), exclusions)
      } else {
        fs.unlinkSync(path.join(targetPath, filename))
      }
    })
  }

  // Delete the folder now that it contains no files
  if (targetPath != process.cwd()) {
    try {
      if (getFolderEmpty(targetPath)) {
        fs.rmdirSync(targetPath)
      }
    } catch (err) {
      console.log(err)
    }
  }
}
