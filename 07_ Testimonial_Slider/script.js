const testimonials = [
    {
        "imgUrl": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        "text": "As a photographer, the seamless integration between my iPhone and MacBook Pro is a game-changer. Editing photos on the go and then seamlessly transferring them to my laptop is incredibly efficient. Apple's ecosystem truly enhances my workflow.",
        "username":"Sarah J., Professional"
    },
    {
        "imgUrl": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        "text": "As a photographer, the seamless integration between my iPhone and MacBook Pro is a game-changer. Editing photos on the go and then seamlessly transferring them to my laptop is incredibly efficient. Apple's ecosystem truly enhances my workflow.",
        "username":"Sarah J., Professional"
    },
    {
        "imgUrl": "https://images.unsplash.com/photo-1701615004837-40d8573b6652?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
        "text": "As a photographer, the seamless integration between my iPhone and MacBook Pro is a game-changer. Editing photos on the go and then seamlessly transferring them to my laptop is incredibly efficient. Apple's ecosystem truly enhances my workflow.",
        "username":"Sarah J., Professional"
    }
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let inx = 0;
updateTestimonial();

function updateTestimonial(){

    const {imgUrl,text,username} = testimonials[inx];

    imgEl.src = imgUrl;
    textEl.innerText = text;
    usernameEl.innerText = username;
    inx++;

    if(inx === testimonials.length){
        inx = 0;
    }

    setTimeout(()=>{updateTestimonial()},5000);

}