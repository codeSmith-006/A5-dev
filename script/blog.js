// fetch the discover button and add some action
const discoverBtn = document.getElementById("discover-btn")

if(discoverBtn) {
    discoverBtn.style.cursor = "pointer"; 
    discoverBtn.addEventListener("click", () => {
        window.location.href = "blog.html";
    })
}


// fetch the back to desk button and did some action
const backBtn = document.getElementById("back-to-desk-btn")

if(backBtn) {
    backBtn.addEventListener("click", () => {
        console.log("click");
        window.location.href = "index.html";
    })
}
