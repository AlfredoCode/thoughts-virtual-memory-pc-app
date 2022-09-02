const { app, BrowserWindow } = require('electron');
const path = require('path');
const srcPath = './src/';

createWindow = function(){
    win = new BrowserWindow({
        width: 1280,
        height:720,
        minHeight:480,
        minWidth:640,
        frame: false,
        autoHideMenuBar:true,
    });
    win.loadFile(srcPath + 'index.html')   
    win.openDevTools({ mode: 'detach' })
}


app.whenReady().then(() => {
    createWindow()
  })