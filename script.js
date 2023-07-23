//Default todo
//Global variable with an array with tasks
let mytodo_list = ["Study", "Go for Walk", "Grocery", "Socialize"];

// CRUD operation 

//CREATE: add new entry to array
function CreateTask() { //CreateTask function adds new task to the array mytodo_list
    let task = document.getElementById("add-task").value;
    if(task == "") {
        alert("Please enter a task");
    } else {
        mytodo_list.push(task);
        document.getElementById("add-task").value = "";
        ReadAllTask();
    }
}

//READ: read the entire content of the array
function ReadAllTask() { 
    //ReadAllTask will read all the task of array with the help of for loop
    //and display it in html table by populating the table with rows.
    //This function also helps to display the counter by calculating the length of the array.
    let data = "";
    for (var i = 0; i < mytodo_list.length; i++) {
        data += "<tr>";
        data += "<td>" + mytodo_list[i] + "</td>";
        data += "<td><button class='btn btn-primary' onclick=UpdateTask(" + i + ")>Update</button></td>";
        data += "<td><button class='btn btn-danger' onclick=DeleteTask(" + i + ")>Delete</button></td>";
        data += "<tr>";
    }
    document.getElementById("counter").innerHTML = mytodo_list.length + " Task";
    document.getElementById("mytodo-tasks").innerHTML = data;
}
ReadAllTask();

//UPDATE: updates the existing content of the array with new value
function UpdateTask(item) {
    //UpdateTask is used ot udpate the existing tasks of the array with the splice method.
    //We can update the task by clicking on the update button which display the form(id="UpdateForm") and editing the content.
    //The form(id="UpdateForm") is displayed by changing the style property of the form(id="UpdatForm") to "block".
    document.getElementById("UpdateForm").style.display = "block";
    document.getElementById("update-task").value = mytodo_list[item];
    document.getElementById("UpdateForm").onsubmit = function () {
        let task = document.getElementById("update-task").value;
        mytodo_list.splice(item, 1, task.trim());

        ReadAllTask();
        CloseInput();
    };
}

//DELETE: deletes the existing content of the array
function DeleteTask(item) {
    //DeleteTask function is used to delete the existing task from the array with the help of splice mehtod
    mytodo_list.splice(item, 1);

    ReadAllTask();
}

function CloseInput() {
    //CloseInput function helps to hide the form (id="UpdateForm") after updating or when the close button is clicked
    document.getElementById("UpdateForm").style.display = "none";
}