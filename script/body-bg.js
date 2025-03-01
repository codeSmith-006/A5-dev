// fetching body 
const body = document.getElementById("body");


// fetching color btn to add click events in the body
document.getElementById("bg-color-btn").addEventListener("click", () => {
    let numOne = Math.floor(Math.random() * 255);
    let numTwo = Math.floor(Math.random() * 255);
    let numThree = Math.floor(Math.random() * 255);

    body.style.backgroundColor = `rgb(${numOne}, ${numTwo}, ${numThree}, 0.5)`;
})

