const DEFAULT_GRID = 16;

makeGrid(DEFAULT_GRID);

document.getElementById('sizeSlider').addEventListener('input',(e)=>{
    makeGrid(e.target.value);
});

function makeGrid(block){

    let squareBlock = block * block;
    
    let sizePerBlock = 960/block;

    const parentNode = document.getElementById('container');

    while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.lastChild);
    }
    document.getElementById('sizeIndicator').innerText= `${block} x ${block}`;

    for(let i = 0 ; i < squareBlock; i++){
        const miniDivs = document.createElement('div');
        miniDivs.style.height = `${sizePerBlock}px`;
        miniDivs.style.width = `${sizePerBlock}px`;
        parentNode.appendChild(miniDivs);
    }

    paint();

}

function paint(){
    const childDivs = document.querySelectorAll('.container > div');
    childDivs.forEach(element => {
        element.addEventListener('mousemove',(e)=>{
            element.style.background = '#0B2447';
        }); 
    });
}