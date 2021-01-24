let path = require('path')
let getAppDataPath = require('./get_appdata_path')
let folderSize = require('./folder_size')

let cacheSize = (appInfo) => {

    let localAppData = getAppDataPath('local')
    let roamingAppData = getAppDataPath('roaming')

    let cacheSize = 0

    let cacheFolders = []

    if(appInfo && appInfo['caches'] && appInfo['caches']['local']){
        appInfo['caches']['local'].forEach((cacheFolder) => {
            let cacheFolderPath = path.join(localAppData, cacheFolder)
            cacheFolders.push(cacheFolderPath)
        })
    }

    if(appInfo && appInfo['caches'] && appInfo['caches']['roaming']){
        appInfo['caches']['roaming'].forEach((cacheFolder) => {
            let cacheFolderPath = path.join(roamingAppData, cacheFolder)
            cacheFolders.push(cacheFolderPath)
        })
    }
    
    cacheFolders.forEach((cacheFolder) => {
        cacheSize = cacheSize + folderSize(cacheFolder)
    })

    return cacheSize
}

module.exports = cacheSize