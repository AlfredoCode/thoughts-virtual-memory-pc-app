const addForm = document.querySelector('.new-thought-form');

const input = document.querySelector('.thought-name');
const currentDiv = document.querySelector('.thoughts-list')

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


var items = [];


submitBtn.addEventListener('click', function (e) {
    const newDiv = document.createElement("div");
    newDiv.className = "item"
    const newSpan = document.createElement("span");
    const text = input.value;
    const newContent = document.createTextNode(text);

    newSpan.appendChild(newContent);
    newDiv.appendChild(newSpan);

    
    currentDiv.appendChild(newDiv);
    
    input.value = "";
    input.focus();

    var itemName = {
        id: items.length,
        name: text,
      };
  
    items.push(itemName);

    old = localStorage.getItem('Items');
    if(old === null){
        old = "";
    }
    localStorage.setItem('Items', old + items);
    
    





    
})