// fetch the completed button

const completedBtns = document.getElementsByClassName("complete-btn");

for (const btn of completedBtns) {
    btn.addEventListener("click", () => {
        btn.classList.add("opacity-20");
        console.log("yah");
        btn.disabled = true;
    })
}
