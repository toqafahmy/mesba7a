let count = 0;
let counted = document.getElementById("counted")
let previous = document.getElementById("previous");


function increase(){
    count += 1;
    counted.innerText = count;
};

function save(){
    let result = count + " - ";
    previous.textContent += result;
    counted.textContent = 0;
    count = 0;
};


let person = "يا تقى";
let greeting = "أهلًا وسهلًا ";
let myGreeting = greeting + person;
let message = document.getElementById("welcome-el");
message.innerText = myGreeting;
message.innerText = myGreeting;