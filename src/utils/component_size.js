let path = require('path')
let getAppDataPath = require('./get_appdata_path')
let folderSize = require('./folder_size')

/* Calculates the size of a component of an app in bytes */
// appInfo = Object containing app's fodlers from JSON
// sizeType = 'cache' , 'install' or 'data'
let componentSize = (appInfo, sizeType) => {

    let localAppData = getAppDataPath('local')
    let roamingAppData = getAppDataPath('roaming')

    let componentSize = 0

    let componentFolders = []

    if(appInfo && appInfo[sizeType] && appInfo[sizeType]['local']){
        appInfo[sizeType]['local'].forEach((componentFolder) => {
            let componentFolderPath = path.join(localAppData, componentFolder)
            componentFolders.push(componentFolderPath)
        })
    }

    if(appInfo && appInfo[sizeType] && appInfo[sizeType]['roaming']){
        appInfo[sizeType]['roaming'].forEach((componentFolder) => {
            let componentFolderPath = path.join(roamingAppData, componentFolder)
            componentFolders.push(componentFolderPath)
        })
    }
    
    componentFolders.forEach((componentFolder) => {
        componentSize = componentSize + folderSize(componentFolder)
    })

    return componentSize
}

module.exports = componentSize