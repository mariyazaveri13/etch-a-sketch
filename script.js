const DEFAULT_GRID = 16;
let bgcolor = '#0B2447';

const slider = document.getElementById('sizeSlider');
const parentNode = document.getElementById('container');
const indicator = document.getElementById('sizeIndicator');
const paintBtn = document.getElementById('paint');
const erasorBtn = document.getElementById('erasor');
const clearBtn = document.getElementById('clear');
const rainbowBtn = document.getElementById('rainbow');
const colorPicker = document.getElementById('colors');

let currMode = 'paint';
let newMode = '';

let childDivs;

makeGrid(DEFAULT_GRID);

let mouseDown = false;
parentNode.onmousedown  = (e) => (mouseDown = true);
parentNode.onmouseup = (e) => (mouseDown = false);

slider.oninput = (e) => makeGrid(e.target.value);
colorPicker.oninput = (e) => {
    bgcolor = e.target.value;
    paint(bgcolor);
};

paintBtn.onclick = (e) => addClassActive('paint');
erasorBtn.onclick = (e) => addClassActive('erasor');
clearBtn.onclick = (e) => addClassActive('clear');
rainbowBtn.onclick = (e) => addClassActive('rainbow');

function addClassActive(mode){
    switch(mode){
        case 'paint':
            paint(bgcolor);
            break;

        case 'erasor':
            erase();
            break;

        case 'clear':
            clear();
            break;

        case 'rainbow':
            rainbow();
            break;
    }
}


function makeGrid(block){

    let squareBlock = block * block;
    
    let sizePerBlock = 960/block;

    while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.lastChild);
    }
    indicator.innerText= `${block} x ${block}`;

    for(let i = 0 ; i < squareBlock; i++){
        const miniDivs = document.createElement('div');
        miniDivs.style.height = `${sizePerBlock}px`;
        miniDivs.style.width = `${sizePerBlock}px`;
        parentNode.appendChild(miniDivs);
    }

    paint(bgcolor);

}

function paint(color='#0B2447'){
    childDivs = document.querySelectorAll('.container > div');
    childDivs.forEach(element => {
        element.onmousemove = (e) => {
            if(mouseDown) element.style.background = color;
            else return
        }
    });
}

function erase(){
    childDivs = document.querySelectorAll('.container > div');
    childDivs.forEach(element => {
        element.onmousemove = (e) => {
            if(mouseDown) element.style.background = '#fff';
            else return
        }
    });
}

function clear(){
    childDivs = document.querySelectorAll('.container > div');
    childDivs.forEach(element => element.style.removeProperty('background'));
}

function rainbow(){
    childDivs = document.querySelectorAll('.container > div');
    childDivs.forEach(element =>{
        element.onmousemove = (e) =>{
            if(mouseDown) element.style.background = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`;
        }
    });
}