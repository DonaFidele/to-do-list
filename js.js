var toDoList = ['papa'];
var newTask = document.getElementById('new-task');

var addButton = document.getElementsByTagName("button")[0]; //first button

addButton.addEventListener('click', function() {
    toDoList.push(newTask);
});
console.log(toDoList);
// var notDoneTasks = document.getElementsByClassName("lists");

// var doneTasks = document.getElementsByClassName("completed");

// var checkBox = document.createElement("input");
// var label = document.createElement("label");
// var editInput = document.createElement("input");
// var deleteButton = document.createElement("button");