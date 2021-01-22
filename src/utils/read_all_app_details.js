let fileSystem = require('fs')
let path = require('path')

let readAllAppDetails = () => {

    let staticPath = path.join(__static)

    let appDetails = []

    let files = fileSystem.readdirSync(staticPath)

    /* Remove Invalid Types */
    let jsonFiles = files.filter((fileName) => {
        return fileName.includes('.json')
    })

    /* Read in file contents as JS Object */
    jsonFiles.forEach((fileName) => {
        let filePath = path.join(__static, fileName)
        let rawData = fileSystem.readFileSync(filePath)

        let appDetail = JSON.parse(rawData)

        appDetails.push(appDetail)
    })

    return appDetails

}

module.exports = readAllAppDetails