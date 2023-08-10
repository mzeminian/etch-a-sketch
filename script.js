//Variables Declaration
const squareContainer = document.querySelector('.squareContainer');
var divsNumber = 64;
let cellColor = 'black';
const colorPicker = document.querySelector('.cellColor');
const eraser = document.querySelector('#erase');
const slider = document.querySelector('.slider');
let sliderValue = document.querySelector('#sliderValue');

//Function that creates squares

/*slider.oninput = function() {
    divsNumber = this.value;
    sliderValue.innerHTML = this.value + ' X ' + this.value;
    console.log(divsNumber);
    createDivs(divsNumber, squareContainer);
}*/

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



//Function to select cell colour
colorPicker.addEventListener('input', function(e) {
    cellColor = this.value;
  });

//Randow cell colour
function randomColor(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    colorPicker.value = '#' + randomColor;
    cellColor = colorPicker.value;
    console.log(colorPicker.value);
}

//Function to turn cell colour
squareContainer.addEventListener('mouseover', function (e) {
    if (e.target.matches('.square')) {
      e.target.style.backgroundColor = cellColor;
      if (cellColor == '#fff'){
        e.target.style.transition = '0.3s'
      }
      if (cellColor != '#fff'){
        e.target.style.transition = '0.05s'
      }
    }
});

//Erase cell colour
function erase(){
    cellColor = '#fff';
}





//Function starts when the page is loaded

window.onload = createDivs(divsNumber, squareContainer);

