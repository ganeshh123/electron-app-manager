import * as ps from 'ps-node'

/* Attempts to kill the process with a given name */

// processName = name of process to be killed (eg: Discord.exe)
// callback = callback function to run, which takes in a string once completed
//                  'Process not running' -> process is not running
//                  'Process killed' -> kill signal sent successfully
//                  'Error' -> Error occured
export const killProcess = (
  processName: string,
  callback: (status: string) => any
) => {
  ps.lookup({ command: processName }, (error: Error, resultList) => {
    if (error) {
      console.log(error)
    }

    if (!resultList || !resultList[0]) {
      return callback('Process not running')
    }

    let pid = resultList[0]['pid']

    if (!pid) {
      callback('Error')
    }

    try {
      process.kill(pid)
      return callback('Process killed')
    } catch {
      return callback('Error')
    }
  })
}
