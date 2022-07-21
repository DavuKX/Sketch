const board = document.getElementById('board');
let div = document.createElement('div');

for (let i = 0; i < 64; i++) 
{
    for (let j = 0; j < 64; j++) 
    {
        let div = document.createElement('div');
        div.style.gridRow = i;
        div.style.gridColumn = j;
        board.appendChild(div);
    }
}