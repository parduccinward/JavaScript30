
const divs = document.querySelectorAll("div");

function logText(e){
    console.log(this);
}

divs.forEach(div => div.addEventListener("click",logText));