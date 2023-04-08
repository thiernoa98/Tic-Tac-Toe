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


function addXO() {
    let squareNum = this.id.slice(-1);

    //flip the boolean
    xTurn = !xTurn;


     xTurn ? (this.textContent = 'X', boardObjArr[squareNum] = 'X', feedback.textContent = '0\'s turn..' ) : 
             (this.textContent = '0', boardObjArr[squareNum] = 'O', feedback.textContent = 'X\'s turn..');

    //Disabling the occupied square so that it cannot be clicked again
    this.removeEventListener('click', addXO);

    moves++;
    if(moves >= 5) {
        checkForWinner();
    }
}


function checkForWinner() {

    //check for winner upper left to right or right to left
    if (boardObjArr[0] == boardObjArr[1] && boardObjArr[1] == boardObjArr[2]) {
        feedback.textContent = `${boardObjArr[0]} Wins`;
        colorizeTicTacToe(0,1,2);

    }else if (boardObjArr[0] == boardObjArr[3] && boardObjArr[3] == boardObjArr[6]){
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

//colorizing the tic tac toe
function colorizeTicTacToe(tic,tac,toe) {
    squareDivs[tic].classList.add('winner');
    squareDivs[tac].classList.add('winner');
    squareDivs[toe].classList.add('winner');
}
