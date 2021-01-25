let componentSize = require('./component_size')

/* Calculates an app's install, data and cache size in bytes */
let calculateAppSizes = (appInfo) => {

    let sizes = {}

    sizes['cache'] = componentSize(appInfo, 'cache')
    sizes['data'] = componentSize(appInfo, 'data')
    sizes['install'] = componentSize(appInfo, 'install')
    sizes['totalSize'] = sizes['data'] + sizes['install']

    return sizes
}

module.exports = calculateAppSizes