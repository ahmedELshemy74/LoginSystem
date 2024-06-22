let welcomeMsg=document.getElementById("welcomeMsg")

window.addEventListener("load",function () {
    displayUserName()
})

function displayUserName() {
    if (localStorage.getItem("userName")) {
        welcomeMsg.innerHTML=`Welcome ${localStorage.getItem("userName")}`
    } else {
        welcomeMsg.innerHTML=""
    }
}