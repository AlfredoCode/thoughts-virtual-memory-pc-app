const { app, BrowserWindow } = require('electron');
const path = require('path');
const srcPath = './src/';
const imgPath = srcPath + 'img/';

createWindow = function () {
    win = new BrowserWindow({
        width: 1280,
        height: 720,
        minHeight: 480,
        minWidth: 900,
        frame: false,
        autoHideMenuBar: true,
        title: "Thoughts",
        icon: imgPath + 'thoughts.png'
    });
    win.loadFile(srcPath + 'index.html')
    // console.log(imgPath + 'thoughts.png')
    win.openDevTools({ mode: 'detach' })
}


app.whenReady().then(() => {
    createWindow()
})


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})