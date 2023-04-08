// Getting the necessary DOM elements
const newGameBtn = document.querySelector('button');
newGameBtn.addEventListener('click', play);
const feedback = document.getElementById('feedback');
const squareDivs = document.querySelectorAll('.square');

//Adding a variabl;e for counting total moves
let xTurn = true;
let moves = 0;

let boardObjArr = [];

function play() {
    
    for (let i = 0; i < squareDivs.length; i++) {
        //resest the previous data
        squareDivs[i].innerHTML = '';

        squareDivs[i].addEventListener('click', addXO)   

        squareDivs[i].style = 'none';

        squareDivs[i].id = i;

        squareDivs[i].classList.remove('winner');
    }
    // declare the ids to compare it to
    boardObjArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    //dispolay good luck after click
    feedback.innerHTML = 'Good luck!'
}

// Define addXO() func that runs whenever player clicks a square 
// it adds an "X" or "O" to the square (depending on whose turn it is)
function addXO() {
    //9 get the number part of the id,
    // replacing the existing number to to X or 
    let squareNum = this.id.slice(-1);

    // 9B. Toggle whose turn it is (so that would be a boolean to flip)
    //changing the boolean by setting it equals to not itself
    xTurn = !xTurn;

    // 10. Deploy the X or O to the clicked square (remember: "this" IS the obj 
    //  that called the function
    //this represent the thing that got clicked, button, div
     xTurn ? (this.textContent = 'X', boardObjArr[squareNum] = 'X', feedback.textContent = '0\'s turn..' ) : 
             (this.textContent = '0', boardObjArr[squareNum] = 'O', feedback.textContent = 'X\'s turn..');
    console.log(boardObjArr);
    // 11. Disable the occupied square so that it cannot be clicked again
    this.removeEventListener('click', addXO);

    //12 update the board object,
    // console.log(this.id);
    
    console.log(squareNum);

    // 13. Beginning w move #5 (X's 3rd move), call the checkForWinner() 
    //func after each move and increament the moves;
    moves++;
    if(moves >= 5) {
        checkForWinner();
    }
}

// After X's third move and every turn thereafter you need to automatically run the checkForWinner() func which checks to see if X or O have 3 in a row in any of the 8 winning combos
    // there are 8 possible winning combos:
    /* -------
   top row, left col, diag from top left
   middle col, right col, diag from top right
   middle row, bottom row */
function checkForWinner() {
    // 12. Check objecdt that is storing moves / board config and if X or O has 3 in a row, declare Game Over
    // if() { 
    // }

    //check for winner upper left to right or right to left
    if (boardObjArr[0] == boardObjArr[1] && boardObjArr[1] == boardObjArr[2]) {
        feedback.textContent = `${boardObjArr[0]} Wins`;
        colorizeTicTacToe(0,1,2);

    }else if (boardObjArr[0] == boardObjArr[3] && boardObjArr[3] == boardObjArr[6]){
        //check if 
        feedback.textContent = `${boardObjArr[0]} Wins`;
        colorizeTicTacToe(0,3,6);

    }else if(boardObjArr[0] == boardObjArr[4] && boardObjArr[4] == boardObjArr[8]){
        feedback.textContent = `${boardObjArr[0]} Wins`;
        colorizeTicTacToe(0,4,8);

    }else if(boardObjArr[1] == boardObjArr[4] && boardObjArr[4] == boardObjArr[7]){
        feedback.textContent = `${boardObjArr[1]} Wins`;
        colorizeTicTacToe(1,4,7);

    }else if(boardObjArr[2] == boardObjArr[4] && boardObjArr[4] == boardObjArr[6]){
        feedback.textContent = `${boardObjArr[2]} Wins`;
        colorizeTicTacToe(2,4,6);

    }else if(boardObjArr[2] == boardObjArr[5] && boardObjArr[5] == boardObjArr[8]){
        feedback.textContent = `${boardObjArr[2]} Wins`;  
        colorizeTicTacToe(2,5,8);

    }else if(boardObjArr[3] == boardObjArr[4] && boardObjArr[4] == boardObjArr[5]){
        //checking the middle row
        feedback.textContent = `${boardObjArr[3]} Wins`; 
        colorizeTicTacToe(3,4,5);

    }else if(boardObjArr[6] == boardObjArr[7] && boardObjArr[7] == boardObjArr[8]){
        feedback.textContent = `${boardObjArr[6]} Wins`; 
        colorizeTicTacToe(6,7,8);

    }else{
        //no winner
        if (moves == 9) {
            feedback.textContent = 'Cats Game! Game Over!'
            setTimeout(()=>play(), 2000);
           
        }
    }

}

//colorize the tic tac toe
function colorizeTicTacToe(tic,tac,toe) {
    squareDivs[tic].classList.add('winner');
    squareDivs[tac].classList.add('winner');
    squareDivs[toe].classList.add('winner');
}
