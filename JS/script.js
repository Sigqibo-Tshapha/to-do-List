let addToDoButton = document.getElementById('toDoBtn');
let inputField  = document.getElementById('txtField');
let toDoContainer  = document.getElementById('toDoContainer');
let clearBtn = document.getElementById('clearBtn');

addToDoButton.addEventListener('click', function(){
    if(inputField.value != ""){
    let paragraph = document.createElement('p');
    paragraph.classList.add('list-item');
    paragraph.innerText = inputField.value ;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";

    const task_delete = document.createElement('button');
	task_delete.classList.add('btn');
	task_delete.innerText = 'Delete';

    paragraph.add(task_delete);

    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
    
}
})
clearBtn.addEventListener('click',function(){
    for(n in toDoContainer.childNodes){
    toDoContainer.innerHTML = "";
    }
})



