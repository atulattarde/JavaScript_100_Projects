const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");


const newYearDate = new Date("Jan 1, 2025 00:00:00").getTime();
//console.log(newYearDate);
updateCountDown();

function updateCountDown(){
    const now = new Date().getTime();
    //console.log(now);
    const gap  = newYearDate - now;
    //console.log(gap);
    const second = 1000;
    //console.log(second);
    const minute = second * 60;
    //console.log(minute);
    const hour = minute * 60;
    //console.log(hour);
    const day  = hour * 24;
    //console.log(day);

    const d = Math.floor(gap/day); // calculate Days
    //console.log(d);

    const h = Math.floor((gap % day)/ hour); //calculate Hours
    //console.log(h);

    const m = Math.floor((gap % hour)/minute); // calculate Minutes
    //console.log(m);

    const s = Math.floor((gap % minute)/second); // calculate Seconds
   // console.log(s);

   if(d < 10)
   {
    dayEl.innerText = "0" + d;
   }
   else{
    dayEl.innerText = d;
   }

   if(h < 10 )
   {
    hourEl.innerText = "0"+ h;
   }
   else{
    hourEl.innerText =  h;
   }

   if(m < 10)
   {
    minuteEl.innerText = "0" + m;
   }
   else{
    minuteEl.innerText = m;
   }
    
    
    secondEl.innerText = s;
    setTimeout(updateCountDown,1000)
}
