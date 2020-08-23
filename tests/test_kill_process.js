let killProcess = require('../src/renderer/utils/kill_process')

console.log('Result for finding process id of discord : ')

let callback = (result) => {
    console.log(result)
}

killProcess('Discord.exe', callback)

