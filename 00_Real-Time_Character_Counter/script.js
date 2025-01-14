const inputEl = document.querySelector(".input");
const tyepCharEl = document.querySelector(".tyep-char");
const remaingCharEl = document.querySelector(".remaing-char");

let charLength;

function updateChar(event){
    charLength = event.target.value;
    tyepCharEl.innerHTML = "Type character:"+(1+charLength.length);
    remaingCharEl.innerHTML = "Remaining Character:"+(1000-(1+charLength.length));
    
}


