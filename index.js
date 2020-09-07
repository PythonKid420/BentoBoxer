const { app, BrowserWindow, Menu } = require('electron');

function createWindow() {
    let win = new BrowserWindow({
        width: 1200,
        height: 700,
        webPreferences: {
            nodeIntegration: true
        },
        // icon: __dirname + '/site/favicon.ico'
    })

    win.loadFile('Beepbox.html');
    win.setMenu(null);
}

app.on('ready', createWindow);