
/* TODO create this function for deleteButton.
function test() {
    var item = this.parentNode; (item is the button.)
    var parent = item.parentNode; (parent is the todoCard.)
    parent.removeChild(item);
    }*/


// Storing todoListsArray into localStorage.
var todoListsArray = ["Hello"];


// initializing variables.
let input = document.getElementById("inputtext");
let todoCard = document.getElementById("todo-card");
let checkbox = document.getElementById("checkBox");
let buttonAdd = document.getElementById("add");
let todoBox = document.getElementById("todobox");



// add button functionality.
buttonAdd.addEventListener("click", add);





function add() {
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
    let newCheck = document.createElement("input");
    let newDeleteButton = document.createElement("div");
    let todoBox = document.getElementById("todobox");
    newCheck.setAttribute("type","checkbox");
    newCard.setAttribute("class", "todo-card");
    // Assigns a id to every New To do Card.
    newCard.setAttribute("id", num);
    newDeleteButton.setAttribute("class", "delete-button");
    newDeleteButton.setAttribute("id", num);
    newDeleteButton.addEventListener("click", deleteTodos);
    newLabel.appendChild(newText);
    newCard.appendChild(newCheck);
    newCard.appendChild(newLabel);
    newCard.appendChild(newDeleteButton);
    todoBox.appendChild(newCard);
  
}


    // convert the array to a string and then add the string to todoLists. 
function saveTodos() {
        let todoListsStorage = JSON.stringify(todoListsArray);
       localStorage.setItem("todoLists", todoListsStorage);
    }
    
    // retrieve the todoLists and convert them to an array.
function getTodos() {
   let todoListsStorageGet = localStorage.getItem("todoLists");
      todoLists = JSON.parse(todoListsStorageGet);
      if(!todoLists) {
          todoLists = [];
      }
}

// delete todos.
function deleteTodos(id) {
    let todoItem = this.parentNode;
    let todoParent= todoItem.parentNode;
    todoParent.removeChild(todoItem);
    console.log("todoItem");
    getTodos();
   todoLists.splice(id, 1);
    

   todoListsArray = todoLists;
    saveTodos();
    getTodos();
}

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
        let newCheck = document.createElement("input");
        let newDeleteButton = document.createElement("div");
        let todoBox = document.getElementById("todobox");
        newDeleteButton.setAttribute("class", "delete-button");
        newDeleteButton.setAttribute("id", i);
        newDeleteButton.addEventListener("click", deleteTodos);
        newCheck.setAttribute("type","checkbox");
        newCard.setAttribute("class", "todo-card");
        // assigns a id to every To do Card.
        newCard.setAttribute("id", i);
        newLabel.appendChild(newText);
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
