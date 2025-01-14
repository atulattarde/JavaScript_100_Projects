const timerEl = document.getElementById("timer");
const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timeEl = document.getElementById("timer");
let seconds = 1000;
let minutes = 60*seconds;
let timer = 25*minutes;

function startTimer(){
timer = timer - seconds;
newTime = Math.floor(timer / minutes);
timeEl.innerText = newTime;
}

setInterval(()=>{
    startTimer();
},1000)