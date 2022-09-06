const { ipcRenderer } = require("electron");
var currentID;

// const thoughts_list = document.querySelector('.thoughts-list')
let thought_notes;

async function load() {
    thought_notes = await ipcRenderer.invoke("get_data");
    thought_notes.sort((a, b) => (a.id > b.id ? 1 : -1))   

    if (currentID === undefined) {
        currentID = 0
    }

    for (const thought of thought_notes) {

        //GET MAX ID
        if (thought.id > currentID) {
            currentID = thought.id;
            // console.log(currentID)
        }



        //DISPLAY ELEMENT
        thoughts_list.innerHTML += `
            <div class = 'item'>
                <span>${thought.thought_name}</span>
            </div>
        `
    }




}


