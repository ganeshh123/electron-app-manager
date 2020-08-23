let ps = require('ps-node')

/* Attempts to kill the process with a given name */

// processName = name of process to be killed (eg: Discord.exe)
// callback = callback function to run, which takes in a string once completed
let killProcess = (processName, callback) => {

    let resultList = ps.lookup({command: processName}, (error, resultList) => {
        
        let pid = resultList[0]['pid']

        try{
            process.kill(pid)
            callback('Process killed')
        }catch{
            callback('Error')
        }
    })

}

module.exports = killProcess