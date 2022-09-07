

const addForm = document.querySelector('.new-thought-form');

const input = document.querySelector('.thought-name');
const thoughts_list = document.querySelector('.thoughts-list')
const header = document.querySelector('.new-thought-header');
let noItemSpan;
let currentColor = "blue";

const addBtn = document.querySelector('.add-new-thought');
const submitBtn = document.querySelector('.btn-submit-thought');
const removeBtn = document.querySelector('.btn-close-new');

const blue = document.querySelector('.choice-blue');
const red = document.querySelector('.choice-red');
const green = document.querySelector('.choice-green');
const orange = document.querySelector('.choice-orange');
const choice = document.querySelectorAll('.color-choice');




/*****************************VARIABLES*************************/



addBtn.addEventListener('click', function (e) {
    addForm.style.opacity = 1;
    addForm.style.visibility = 'visible';
    addForm.classList.add('shadow-anim');
    console.log("Click");
    input.value = "";
    input.focus();
    addForm.style.animationName = 'shadow-'+currentColor;

})



removeBtn.addEventListener('click', function (e) {
    addForm.style.opacity = 0;
    addForm.style.visibility = 'hidden';
    addForm.classList.remove('shadow-anim');
    addForm.style.animationName = null;
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
    newDiv.style.backgroundImage = 'var(--gradient-' + currentColor + ')';
    
    const newSpan = document.createElement("span");
    var text = input.value;
    if (text === "") {
        text = "Unnamed thought"
    }
    const newContent = document.createTextNode(text);

    newSpan.appendChild(newContent);
    newDiv.appendChild(newSpan);


    thoughts_list.appendChild(newDiv);


    newDiv.addEventListener("mouseover", function(e) {
        newDiv.style.boxShadow = '0 1px 5px var(--clr-shadow), 0 0 50px var(--clr-shadow-'+currentColor+')';
    });
    newDiv.addEventListener("mouseleave", function(e) {
        newDiv.style.boxShadow = 'none';
    });


    input.value = "";
    input.focus();

    if (currentID != undefined) {
        currentID = currentID + 1;
        console.log("xd")
    }
    const id_curr = currentID;

    let _item = {
        thought_name: text,
        id: id_curr,
        color: currentColor
    };
    ipcRenderer.send("save_thought", _item);

    //HIDE NO-THOUGHTS SPAN
    noItemSpan = document.querySelector('.no-item-span');
    if(noItemSpan != null){
        thoughts_list.removeChild(noItemSpan);
    }
    

})




// COLOR CHANGE

function changeColor(color) {
    submitBtn.style.backgroundImage = 'var(--gradient-' + color + ')';
    currentColor = color;
    submitBtn.addEventListener("mouseover", function(){
        submitBtn.style.boxShadow = '0 0 5px var(--clr-shadow), 0 0 20px var(--clr-shadow-'+color+')';

    });
    submitBtn.addEventListener("mouseleave", function(){
        submitBtn.style.boxShadow = 'none';

    });
    header.style.backgroundImage = 'var(--gradient-' + color + ')';
    addForm.style.animationName = 'shadow-'+color;
    
}


for (let i = 0; i < choice.length; i++) {
    choice[i].addEventListener('click', function (e) {

        if (choice[i].classList.contains('choice-blue')) {
            if (!choice[i].classList.contains('color-choice-active')) {
                blue.classList.add('color-choice-active');
                changeColor("blue");
            }

            red.classList.remove('color-choice-active');
            green.classList.remove('color-choice-active');
            orange.classList.remove('color-choice-active');
        }
        else if (choice[i].classList.contains('choice-red')) {
            if (!choice[i].classList.contains('color-choice-active')) {
                red.classList.add('color-choice-active');
                changeColor("red");
            }


            blue.classList.remove('color-choice-active');
            green.classList.remove('color-choice-active');
            orange.classList.remove('color-choice-active');
        }
        else if (choice[i].classList.contains('choice-green')) {
            if (!choice[i].classList.contains('color-choice-active')) {
                green.classList.add('color-choice-active');
                changeColor("green");
            }

            blue.classList.remove('color-choice-active');
            red.classList.remove('color-choice-active');
            orange.classList.remove('color-choice-active');
        }
        else if (choice[i].classList.contains('choice-orange')) {
            if (!choice[i].classList.contains('color-choice-active')) {
                orange.classList.add('color-choice-active');
                changeColor("orange");
            }

            blue.classList.remove('color-choice-active');
            green.classList.remove('color-choice-active');
            red.classList.remove('color-choice-active');
        }
        input.focus();
    })
}

