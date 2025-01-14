const searchBarContainerEl = document.querySelector(".search-bar-container");
const magnifier = document.querySelector(".magnifier");

magnifier.addEventListener("click",()=>{
    searchBarContainerEl.classList.toggle("active");
})