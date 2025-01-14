const leftContainer = document.querySelector(".left");
const rightContainer = document.querySelector(".right");

leftContainer.addEventListener("mouseover",()=>{
    leftContainer.classList.add("active");
    rightContainer.classList.add("inactive"); 
});

leftContainer.addEventListener("mouseout",()=>{
    leftContainer.classList.remove("active");
    rightContainer.classList.remove("inactive");
})

rightContainer.addEventListener("mouseover",()=>{
    rightContainer.classList.add("active");
    leftContainer.classList.add("inactive");
})

rightContainer.addEventListener("mouseout",()=>{
    rightContainer.classList.remove("active");
    leftContainer.classList.remove("inactive");
})