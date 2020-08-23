
let path = require('path')
let appdata = process.env.APPDATA

/* Returns the path to the user's appdata folder */

// type = Appdata folder to return, either local or roaming
let getAppDataPath = (type) => {

    let outputPath

    if(type === 'local'){
        outputPath = path.join(appdata, '..', 'Local')
    }else if(type === 'roaming' || !type){
        outputPath = path.join(appdata)
    }

    return outputPath
}

module.exports = getAppDataPath