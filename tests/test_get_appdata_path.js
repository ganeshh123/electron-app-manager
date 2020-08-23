let getAppDataPath = require('../src/renderer/utils/get_appdata_path')

console.log('Get Appdata Path Local Returns:')
console.log(getAppDataPath('local'))
console.log('\nGet Appdata Path Roaming Returns:')
console.log(getAppDataPath('roaming'))