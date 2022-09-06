

const closeBtn = document.querySelector('.btn-close')
const minimizeBtn = document.querySelector('.btn-minimize')
const maximizeBtn = document.querySelector('.btn-maximize')





closeBtn.addEventListener('click', function(e) {
    ipcRenderer.send("app_quit");
})

minimizeBtn.addEventListener('click', function(e) {
    ipcRenderer.send("window_minimize");
})

maximizeBtn.addEventListener('click', function(e) {
    ipcRenderer.send("window_maximize");
})
