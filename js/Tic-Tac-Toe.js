// Lesson 07.05 - Tic-Tac-Toe Challenge - PROG
// for pair programming 

// Get the necessary DOM elements

// 0. Get the New Game button
const newGameBtn = document.querySelector('button');
newGameBtn.addEventListener('click', play);
// 1. Get the green feedback txt box
const feedback = document.getElementById('feedback');

// 2. Get ALL 9 class .square divs at once as an array using querySelectorAll
const squareDivs = document.querySelectorAll('.square');

// 3. Loop the array of class .square divs and assign each square a listener to call 
//the addXO() func when clicked
// for (let i = 0; i < squareDivs.length; i++) {
//     squareDivs[i].addEventListener('click', addXO)
// }

// Define necessary gameplay variables

// 4. Variable for keeping track of whose turn it is (X or O)
//    And a var for counting total moves so that you know when to check for winner
let xTurn = true;
let moves = 0;

// 5. Object / array for storing the board of 9 squares; during game play, 
//the object will be updated to store X's and O's in the object

let boardObjArr = [];

// Define play() func which runs when user clicks New Game btn
function play() {
    
    // 6. clear all the X's and O's from the squares for a fresh game
    for (let i = 0; i < squareDivs.length; i++) {
        squareDivs[i].innerHTML = '';

        // 6B. Loop the array of class .square divs and assign each square a listener to call 
        //the addXO() func when clicked
        squareDivs[i].addEventListener('click', addXO)   

        //6C. make the div text uncopiable
        squareDivs[i].style = 'none';

        //6D store 'i' on the square as its id property
        //setting ids to quare divs
        squareDivs[i].id = i;

        //remove the highlighted text, reset the green 
        squareDivs[i].classList.remove('winner');
    }
    // 7. declare the id to compare it to
    boardObjArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    // 8. Update the feedback green text to say: "X's Turn!"

    //9. dispolay good luck after click
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