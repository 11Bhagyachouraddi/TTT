let currentPlayer = 'X';
let gameStatus = ['', '', '', '', '', '', '', '', ''];

const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

function handleClick(index) {
    if (gameStatus[index] === '' && !checkWinner()) {
        gameStatus[index] = currentPlayer;
        render();
        if (!checkWinner()) {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWinner() {
    for (let combo of winningCombos) {
        const [a, b, c] = combo;
        if (gameStatus[a] && gameStatus[a] === gameStatus[b] && gameStatus[a] === gameStatus[c]) {
            document.getElementById('status').innerText = currentPlayer + ' wins!';
            return true;
        }
    }
    if (!gameStatus.includes('')) {
        document.getElementById('status').innerText = "It's a draw!";
        return true;
    }
    return false;
}

function render() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell, index) => {
        cell.innerText = gameStatus[index];
    });
}

function resetGame() {
    currentPlayer = 'X';
    gameStatus = ['', '', '', '', '', '', '', '', ''];
    document.getElementById('status').innerText = '';
    render();
}

render();
