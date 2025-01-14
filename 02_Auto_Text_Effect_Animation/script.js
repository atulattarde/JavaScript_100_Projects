const containterEl = document.querySelector(".container");

const hobbies = ["Programming","Cooking","Traveling","Planting"];

let hobbyIndex = 0;
let charactorIndex = 0;

updateText();
function updateText(){
    charactorIndex++;
    containterEl.innerHTML = `<h1>I Love ${hobbies[hobbyIndex].slice(0,charactorIndex)}</h1>`;
    
    if(charactorIndex === hobbies[hobbyIndex].length)
    {
        hobbyIndex++;
        charactorIndex = 0;
    }

    if(hobbyIndex === hobbies.length)
    {
        hobbyIndex = 0;
    }
    setTimeout(updateText,400);
}



