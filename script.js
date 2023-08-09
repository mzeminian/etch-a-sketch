//Variables Declaration
const squareContainer = document.querySelector('.squareContainer');
console.log(squareContainer);
var divsNumber = 16 * 16;

//Function that creates squares

function createDivs(divsNumber, squareContainer){
    const container = squareContainer;
    let squares = divsNumber;
    for(let i = 0; i <= squares; i++){
        const div = document.createElement('div'); 
        div.classList.add('square');     
        container.appendChild(div);   
        console.log("I am creating the div number: " + i);                           
    }
}

//Function starts when the page is loaded

window.onload = createDivs(divsNumber, squareContainer);