const btn         = document.getElementById('reset');
const grid        = document.getElementById('board');
const gridValue   = document.getElementById('grid-value');
const colorPicker = document.getElementById('color-picker');
const random      = document.getElementById('random');

setGrid(gridValue.value);

btn.onclick          = () => clearGrid();
gridValue.onchange   = () => clearGrid();

function clearGrid () 
{
    grid.innerHTML = '';
    setGrid(gridValue.value);
};

function randomColor() 
{
    return Math.floor(Math.random() * 256);
};

function changeColor(e) 
{
    if (random.checked === false)
        e.target.style.backgroundColor = colorPicker.value;
    else
        e.target.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
};

function setGrid(size) 
{
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows    = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) 
    {
       const gridElement = document.createElement('div');

       gridElement.classList.add('grid-element');
       gridElement.addEventListener('mouseover', changeColor);
       grid.appendChild(gridElement)
    };    
};
