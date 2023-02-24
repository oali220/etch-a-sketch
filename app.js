makeGrid(100);
console.log('hi');


function makeGrid(size) {
    let board = document.querySelector(".board");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    divCount = size**2;

    for(var i = 0; i < divCount; i++) {
        let div = document.createElement('div');
        div.style.color = 'blue;'
        board.insertAdjacentElement("beforeend", div);
        board.appendChild(div);

    }
}
makeGrid();