//Variables Declaration
const squareContainer = document.querySelector('.squareContainer');
console.log(squareContainer);
var divsNumber = 32;

//Function that creates squares

function createDivs(divsNumber, squareContainer){
    const container = squareContainer;
    let squares = divsNumber;
    let size = container.clientWidth / squares;
    for(let i = 0; i < squares*squares; i++){
        const div = document.createElement('div'); 
        div.classList.add('square'); 
        div.style.width = size + "px";
        div.style.height = size + "px";    
        container.appendChild(div);                          
    }
}

//Function to turn cell colour black



//Function starts when the page is loaded

window.onload = createDivs(divsNumber, squareContainer);