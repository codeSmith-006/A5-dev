// fetching body 
const body = document.getElementById("body");

// color array

const color = ["#d4a6f3", "#f3c89b", "#a9e1f3", "#f0b6d1", "#b0f3aa", "#d4f3a6", "#c3a6f3", "#f3a6c7", "#a6f3d2", "#f3e1a6"];


// fetching color btn to add click events in the body
document.getElementById("bg-color-btn").addEventListener("click", () => {
    let randomNumber = Math.floor(Math.random() * 10);
    console.log(randomNumber);
    body.style.backgroundColor = color[randomNumber];
})

