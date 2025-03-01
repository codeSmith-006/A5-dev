// fetch the completed button
const completedBtns = document.getElementsByClassName("complete-btn");

// fetch the task assigned number
let task = document.getElementById("task-assigned");
let taskAssigned = document.getElementById("task-assigned").innerText;
let taskAssignedNumber = parseInt(taskAssigned);

// fetch the total task number
let totalTask = document.getElementById("finished-task");
let totalTaskValue = parseInt(document.getElementById("finished-task").innerText);

for (const btn of completedBtns) {
    btn.addEventListener("click", () => {
        alert("Board updated Successfully");
        
        // decrease the task number
        taskAssignedNumber--;

        // increase the total task number
        totalTaskValue++;

        // then update the task assigned number
        task.innerText = taskAssignedNumber;

        // then update the total task number
        totalTask.innerText = totalTaskValue;

        // condition for last number task finishing
        if(taskAssignedNumber == 0) {
            alert("Congrates!!! You have completed all the current task");
        }

        
        btn.classList.add("opacity-20");
        btn.disabled = true;
    })
}
