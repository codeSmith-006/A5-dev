// fetch the completed button
const completedBtns = document.getElementsByClassName("complete-btn");

// fetch the task assigned number
let task = document.getElementById("task-assigned");
let taskAssigned = document.getElementById("task-assigned").innerText;
let taskAssignedNumber = parseInt(taskAssigned);

// fetch the total task number
let totalTask = document.getElementById("finished-task");
let totalTaskValue = parseInt(document.getElementById("finished-task").innerText);

// fetch the task history
const taskHistory = document.getElementById("task-history");

// fetch the clear history button
const clearBtn = document.getElementById("clear-btn");

for (const btn of completedBtns) {
    btn.addEventListener("click", (event) => {
        alert("Board updated Successfully");

        // decrease the task number
        taskAssignedNumber--;

        // increase the total task number
        totalTaskValue++;

        // then update the task assigned number
        task.innerText = taskAssignedNumber;

        // then update the total task number
        totalTask.innerText = totalTaskValue;

        // get the clicked button id
        let buttonId = event.target.id;

        // check the button id and store the heading of the task
        let historyTitle;

        // creating a new date
        let time = new Date().toLocaleTimeString();

        // conditions for different button id
        if (buttonId === "1") {
            historyTitle = "Fix Mobile Button Issue";
        }
        else if (buttonId === "2") {
            historyTitle = "Add Dark Mode";
        }
        else if (buttonId === "3") {
            historyTitle = "Optimize Home page";
        }
        else if (buttonId === "4") {
            historyTitle = "Add new emoji 🤲";
        }
        else if(buttonId === "5") {
            historyTitle = "Integrate OpenAI API";
        }
        else if (buttonId === "6") {
            historyTitle = "Improve Job searching"
        }

        // condition for last number task finishing
        if (taskAssignedNumber == 0) {
            alert("Congrates!!! You have completed all the current task");
        }

        // create a div inside the parent
        let historyContent = document.createElement("div");

        historyContent.classList.add("pb-2");
        historyContent.innerHTML = `
                                <!-- content -->

                            <p class="font-pop font-medium text-sm opacity-70 text-[#000000] p-2 bg-grid rounded-lg">You have
                                Complete The Task ${historyTitle} at ${time}</p>

        `

        // add historyContent each time the button is clicked
        taskHistory.appendChild(historyContent);

        btn.classList.add("opacity-20");
        btn.disabled = true;
    })
}

// clear the history log after click the clear history button
clearBtn.addEventListener("click", () => {
    taskHistory.innerHTML = ``;

})



