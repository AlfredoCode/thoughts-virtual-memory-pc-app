const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const srcPath = './src/';
const imgPath = srcPath + 'img/';
let Datastore = require('nedb');
let win;
let storage;
createWindow = function () {
    win = new BrowserWindow({
        width: 1280,
        height: 720,
        minHeight: 480,
        minWidth: 900,
        frame: false,
        autoHideMenuBar: true,
        title: "Thoughts",
        icon: imgPath + 'thoughts.png',
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });
    win.loadFile(srcPath + 'index.html')
    // console.log(imgPath + 'thoughts.png')
    // win.openDevTools({ mode: 'detach' })
}

function initStorage(){
    let path = app.getPath('userData');

    storage = new Datastore({
        filename: path + '/thoughts.db'
    })
    storage.loadDatabase((err) =>{
        if(err){
            throw err;
        }
        else{
            console.log("datastore loaded successfully");
        }
    })
}


app.whenReady().then(() => {
    initStorage();
    createWindow();
})


app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})



// IPC CALLS

ipcMain.on("save_thought", (e, thought) => {
    storage.insert(thought, (err, new_doc) => {
        console.log(new_doc);
        if(err){
            console.log("Error while inserting data");
            throw err;
        }
        else{
            console.log("Data inserted successfully");
        }
    })
})


ipcMain.handle("get_data", async (e) => {
    return new Promise((resolve, reject) => {
        storage.find({}, (err, docs) => {
            if(err){
                reject(err);
            }
            else{
                resolve(docs);
            }
        })
    })
})