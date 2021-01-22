let fileSystem = require('fs')
let path = require('path')

/* Returns current app's details and returns as a JavaScript Object */

let getAppDetailsByName = (appName) => {

    let filePath = path.join(__static, appName + '.json')
    let rawData = fileSystem.readFileSync(filePath)

    return JSON.parse(rawData)
}

module.exports = getAppDetailsByName