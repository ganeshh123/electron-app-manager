let fileSystem = require('fs')
let path = require('path')
let getAppDataPath = require('../utils/get_appdata_path')
let cacheSize = require('./cache_size')
let convertUnits = require('./convert_units')

let calculateAppSize = (appInfo) => {

    let localAppData = getAppDataPath('local')
    let roamingAppData = getAppDataPath('roaming')

    let result = {}

    result['cache'] = cacheSize(appInfo)
    result['cache'] = convertUnits(result['cache'], 'b', 'mb', 2) + 'mb'

    console.log(result)

}

module.exports = calculateAppSize