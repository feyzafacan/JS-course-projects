// function increment(){
//     console.log("the button was clicked.")
    
// }

// function myFunc(){
//     console.log(42);
// } 
// myFunc();

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function sumOfLaps(){
//     console.log(lap1+lap2+lap3)
// }
// sumOfLaps();

// let lapsCompleted = 0;

// function myFunc(){
//     lapsCompleted +=  1
//     console.log(lapsCompleted)
// }
// myFunc();
// myFunc();
// myFunc();

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0



function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - " 
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

























