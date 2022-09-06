

const addForm = document.querySelector('.new-thought-form');

const input = document.querySelector('.thought-name');
const thoughts_list = document.querySelector('.thoughts-list')

const addBtn = document.querySelector('.add-new-thought');
const submitBtn = document.querySelector('.btn-submit-thought');
const removeBtn = document.querySelector('.btn-close-new');

addBtn.addEventListener('click', function (e) {
    addForm.style.opacity = 1;
    addForm.style.visibility = 'visible';
    addForm.classList.add('shadow-anim');
    console.log("Click");
    input.value = "";
    input.focus();
})



removeBtn.addEventListener('click', function (e) {
    addForm.style.opacity = 0;
    addForm.style.visibility = 'hidden';
    addForm.classList.remove('shadow-anim');
})



input.addEventListener('keypress', function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        submitBtn.click();
      }
})




submitBtn.addEventListener('click', function (e) {
    const newDiv = document.createElement("div");
    newDiv.className = "item"
    const newSpan = document.createElement("span");
    var text = input.value;
    if(text === ""){
        text = "Unnamed thought"
    }
    const newContent = document.createTextNode(text);

    newSpan.appendChild(newContent);
    newDiv.appendChild(newSpan);

    
    thoughts_list.appendChild(newDiv);
    
    input.value = "";
    input.focus();

    if(currentID != undefined){
        currentID = currentID + 1;
        console.log("xd")
    }
    const id_curr = currentID;

    let _item = {
        thought_name: text,
        id: id_curr
    };
    ipcRenderer.send("save_thought", _item);
    
})