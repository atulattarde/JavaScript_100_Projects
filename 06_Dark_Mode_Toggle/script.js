const inputEl = document.querySelector(".input");
const body = document.querySelector("body");
const circle = document.querySelector(".circle");
 
inputEl.addEventListener("click",()=>{

    if(inputEl.checked){
        //console.log(inputEl.checked);
        body.style.background = "#000";
        circle.style.background = "#000";

    }
    else{
        //console.log("false");
        body.style.background = "#fff";
        circle.style.background = "#fff";
    }
})
