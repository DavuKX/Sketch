const board = document.getElementById('board');
let div = document.createElement('div');

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        let div = document.createElement('div');
        div.className = `row-${i}`;
        board.appendChild(div);
    }
}