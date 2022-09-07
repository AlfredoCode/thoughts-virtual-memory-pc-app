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
            <div class = 'item' style="background-image: var(--gradient-${thought.color})" onmouseover="this.style.boxShadow = '0 1px 5px var(--clr-shadow), 0 0 50px var(--clr-shadow-${thought.color})'" onmouseleave="this.style.boxShadow = 'none'">
                <span>${thought.thought_name}</span>
            </div>
        `
    }

    //Empty thought list
    if(thoughts_list.childNodes.length === 0){
        thoughts_list.innerHTML = `
        <div class = 'no-item-span'>
            <span>You currently have no thoughts</span>
        </div>
    `  
    noItemSpan = document.querySelector('.no-item-span');
    }


}


