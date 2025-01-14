const date = new Date();
console.log(date);
// const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
 const currentDate = date.getDate();
// const currentMonth = date.getMonth();
// const currentDay = date.getDay();
 const currentYear = date.getFullYear();

const heading = document.querySelector(".heading");
//heading.innerHTML = month[currentMonth]; 
heading.innerHTML = date.toLocaleString('en',{
    month:"long",
})

const myDate = document.querySelector(".date");
myDate.innerHTML = currentDate;
 const Day = document.querySelector(".day");
// Day.innerHTML = weekday[currentDay];
Day.innerHTML = date.toLocaleDateString('en',{
    weekday:"long",
})
 const year = document.querySelector(".year");
 year.innerHTML = currentYear;
