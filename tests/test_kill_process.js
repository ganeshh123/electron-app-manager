let killProcess = require('.../src/utils/kill_process')

console.log('Result for attempt to kill discord process : ')

let callback = (result) => {
    console.log(result)
}

killProcess('Discord.exe', callback)

