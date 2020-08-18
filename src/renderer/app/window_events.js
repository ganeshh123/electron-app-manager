var TMP = { maximized: false }

module.exports = () => {
    const remote = require('electron').remote;

    let win = remote.getCurrentWindow()

    let appContainer = document.querySelector('#appContainer')

    document.querySelector('#closeButton').addEventListener("click", (event) =>{
        win.destroy()
    });

    document.querySelector('#minimizeButton').addEventListener("click", (event) =>{
        win.minimize()
        window.location.hash = '#appContainer'
    });

    document.querySelector('#maximizeButton').addEventListener("click", (event) =>{

        if(TMP.maximized == true) {
            TMP.maximized = false
            win.unmaximize()
        } else {
            TMP.maximized = true
            win.maximize()
        }

        window.location.hash = '#appContainer'
    });
}