// Initializing arrays.
var todoListsArray = [];
var checkBoxesArray = [];


// initializing variables.
let input = document.getElementById("inputtext");
let todoCard = document.getElementById("todo-card");
let checkbox = document.getElementById("checkBox");
let buttonAdd = document.getElementById("add");
let todoBox = document.getElementById("todobox");
let checkBox = document.getElementsByClassName("checkBox");



// add button functionality.
buttonAdd.addEventListener("click", add);
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if(event.keyCode === 13) {
        document.getElementById("add").click();
    }
});





function add() {
    // check for empty field.
    if(input.value == ""){
        alert("You have to enter something");
        return false;
    }
    // custom made localStorage retrieve and convert to array.
    let todoListsStorageGet = localStorage.getItem("todoLists");
    todoListsArray = JSON.parse(todoListsStorageGet);
    if(!todoListsArray) {
        todoListsArray = [];
    }
    // add the todo text to the array.
    console.log(todoListsArray);
    todoListsArray.push(input.value);
    // convert the array to a string and add it to the todoLists.
    saveTodos();
    //Create Card.
    getTodos();
    let num = todoLists.length -1;
    let newText = document.createTextNode(input.value);
    let newCard = document.createElement("div");
    let newLabel = document.createElement("label");
    let newP = document.createElement("p");
    let newCheck = document.createElement("input");
    let newDeleteButton = document.createElement("div");
    let todoBox = document.getElementById("todobox");
    newCheck.setAttribute("class", "checkBox");
    newP.setAttribute("class", "todo-text");
    newLabel.setAttribute("class", "todo-label");
    newCheck.setAttribute("type","checkbox");
    newCard.setAttribute("class", "todo-card");
    // Assigns a id to every New To do Card.
    newCard.setAttribute("id", num);
    newDeleteButton.setAttribute("class", "delete-button");
    newDeleteButton.setAttribute("id", num);
    newDeleteButton.addEventListener("click", deleteTodos);
    newCheck.addEventListener("change", saveCheckBox);
    newP.appendChild(newText);
    newLabel.appendChild(newP);
    newCard.appendChild(newCheck);
    newCard.appendChild(newLabel);
    newCard.appendChild(newDeleteButton);
    todoBox.appendChild(newCard);
  
    // Reset input.value to ""
    input.value = "";
    input.focus();
}


    // convert the todoListsArray to a string and then add that string to todoLists in localStorage. 
function saveTodos() {
        let todoListsStorage = JSON.stringify(todoListsArray);
       localStorage.setItem("todoLists", todoListsStorage);
    }
    
    // retrieve the todoLists from localStorage and convert them back to an array.
function getTodos() {
   let todoListsStorageGet = localStorage.getItem("todoLists");
      todoLists = JSON.parse(todoListsStorageGet);
      if(!todoLists) {
          todoLists = [];
      }
}

// delete todos.
function deleteTodos() {
    // grabs the string of <p>
    let itemId = this.parentNode.childNodes[1].childNodes[0].innerHTML;
    // finds the indexOf <p> string
    let index = todoLists.indexOf(itemId);
    console.log(index);
    console.log(itemId);
    let todoItem = this.parentNode;
    let todoParent= todoItem.parentNode;
    todoParent.removeChild(todoItem);
    console.log("todoItem");
    getTodos();
    getCheckBox();
   todoLists.splice(index, 1);
   checkBoxesArray.splice(index, 1);
   
    

   todoListsArray = todoLists;
   saveCheckBox();
    saveTodos();
    getTodos();
}
    // Saves the value of the checkboxes. 
function saveCheckBox(){
    checkBoxesArray = [];
    
    for(let i=0; i < todoLists.length; i++) {
        if(checkBox[i].checked == true) {
        checkBoxesArray.push(true);
      }else {
          checkBoxesArray.push(false);
      }  
    }
    
    let checkBoxesStorage = JSON.stringify(checkBoxesArray);
       checkBoxesArray = localStorage.setItem("checkboxes", checkBoxesStorage);
       console.log("it works");
}
    // Gets the values of the checkboxes.
function getCheckBox(){
    
    let getCheckBox = localStorage.getItem("checkboxes");
    checkBoxesArray = JSON.parse(getCheckBox);
    if(!checkBoxesArray) {
        checkBoxesArray = [];
    }
}

getCheckBox();
getTodos();
listTodos();
// loop that assigns all the todoLists items to their own card.
function listTodos() {
    for(let i = 0;i < todoLists.length; i++) {
        console.log(todoLists);
        let  todoListsArray = todoLists[i];
        // Create todo card.
        let newText = document.createTextNode(todoListsArray);
        let newCard = document.createElement("div");
        let newLabel = document.createElement("label");
        let newP = document.createElement("p");
        let newCheck = document.createElement("input");
        let newDeleteButton = document.createElement("div");
        let todoBox = document.getElementById("todobox");
        newCheck.setAttribute("class", "checkBox");
        newDeleteButton.setAttribute("class", "delete-button");
        newDeleteButton.setAttribute("id", i);
        newDeleteButton.addEventListener("click", deleteTodos);
        newCheck.addEventListener("change", saveCheckBox);
        newP.setAttribute("class", "todo-text");
        newLabel.setAttribute("class", "todo-label");
        newCheck.setAttribute("type","checkbox");
        newCard.setAttribute("class", "todo-card");
        // assigns a id to every To do Card.
        newCard.setAttribute("id", i);
        // assigns a true or false value to the checkboxes.
        newCheck.checked = checkBoxesArray[i];
        newP.appendChild(newText);
        newLabel.appendChild(newP);
        newCard.appendChild(newCheck);
        newCard.appendChild(newLabel);
        newCard.appendChild(newDeleteButton);
        todoBox.appendChild(newCard);
    }
}
// DEV TOOLS
function divTest() {
    document.getElementById("todo-card-test").style.display = "flex";
}
function remove(id) {
    document.getElementById(id).style.display = "none";
}
