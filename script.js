const DEFAULT_GRID = 16;

const slider = document.getElementById('sizeSlider');
const parentNode = document.getElementById('container');
const indicator = document.getElementById('sizeIndicator');
const paintBtn = document.getElementById('paint');
const erasorBtn = document.getElementById('erasor');

let currMode = 'paint';
let newMode = '';

let childDivs;

makeGrid(DEFAULT_GRID);

let mouseDown = false;
document.body.onmousedown  = (e) => (mouseDown = true);
document.body.onmouseup = (e) => (mouseDown = false);

slider.oninput = (e) => makeGrid(e.target.value);

paintBtn.onclick = (e) => addClassActive('paint');
erasorBtn.onclick = (e) => addClassActive('erasor');

function addClassActive(mode){
    switch(mode){
        case 'paint':
            paint();
            break;

        case 'erasor':
            erase();
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

    paint();

}

function paint(){
    childDivs = document.querySelectorAll('.container > div');
    childDivs.forEach(element => {
        element.onmousemove = (e) => mouseDown == true ? element.style.background = '#0B2447' : false;
    });
}

function erase(){
    childDivs = document.querySelectorAll('.container > div');
    childDivs.forEach(element => {
        element.onmousemove = (e) => mouseDown == true ? element.style.background = '#fff' : false;
    });
}