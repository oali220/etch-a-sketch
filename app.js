
let color = 'black'; // default color
makeGrid(16); // default size

//change size of grid
let popupBtn = document.querySelector('#popup-btn');
popupBtn.addEventListener('click', function() {
    let size = sizeBoard();
    makeGrid(size);
})


function makeGrid(size) {
    let board = document.querySelector(".board");

    // makes the board into a grid based on size 
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    divCount = size**2;

    for(var i = 0; i < divCount; i++) {
        let div = document.createElement('div');
        div.addEventListener('mouseover', changeColor);
        board.insertAdjacentElement("beforeend", div); // insets the new div into our board
    }
}


function sizeBoard() {
    let userInput = prompt("Enter a valid size of board: ");
    let popup = document.querySelector('#popup');
    if (userInput > 100 || userInput < 0) {
        popup.innerHTML = "Incorrect size! Please select grid between 1 and 100.";
    }
    else if (userInput == "" || isNaN(userInput) == true) {
        popup.innerHTML = "Please enter a number!";
    }
    else {
        popup.innerHTML = "Valid size!";
        return userInput;
    }
}

function setColor(colorChoice) {
    color = colorChoice;
}

function changeColor() {
    var randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0");
    
    if (color == "random") {
        this.style.backgroundColor = randomColor;
    }
    
    else {
        this.style.backgroundColor = 'black';
    }
}


