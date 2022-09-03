const { app, BrowserWindow } = require('electron');
const path = require('path');
const srcPath = './src/';

createWindow = function () {
    win = new BrowserWindow({
        width: 1280,
        height: 720,
        minHeight: 480,
        minWidth: 900,
        frame: false,
        autoHideMenuBar: true,
        title: "Thoughts",
    });
    win.loadFile(srcPath + 'index.html')
    
    win.openDevTools({ mode: 'detach' })
}


app.whenReady().then(() => {
    createWindow()
})


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})