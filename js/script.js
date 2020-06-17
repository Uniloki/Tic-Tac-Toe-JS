let currentValues = ['','','',
                    '','','',
                    '','',''];



let a1 = document.getElementById('a1');
let a2 = document.getElementById('a2');
let a3 = document.getElementById('a3');
let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');
let c1 = document.getElementById('c1');
let c2 = document.getElementById('c2');
let c3 = document.getElementById('c3');
let aa = document.getElementById('aa');
let ab = document.getElementById('ab');
let ac = document.getElementById('ac');
let ba = document.getElementById('ba');
let bb = document.getElementById('bb');
let bc = document.getElementById('bc');
let ca = document.getElementById('ca');
let cb = document.getElementById('cb');
let cc = document.getElementById('cc');

let gameText = document.getElementById('gameText');
let isWon = false;
let counter = 0;
function playMove(clicked,value){
if(currentValues[value] != 'X' && currentValues[value] != 'O') {
    let player;
    if(counter % 2 === 0){
        player = 'X';
        currentValues[value] = 'X'
        gameText.textContent = ""
        //Test code to clear game text
    } else{
        player = 'O';
        currentValues[value] = 'O'   
    }
    let newText = currentValues[value];
    clicked.textContent = newText;
    counter ++;
    console.log(currentValues[0] + currentValues[1] + currentValues[2] );
    winGame(player);
    if(counter === 9){
        tiedGame();
        winGame(player);
        clearBoard();
    }
}
}

function clearBoard(){
    a1.textContent = '';
    a2.textContent = '';
    a3.textContent = '';
    b1.textContent = '';
    b2.textContent = '';
    b3.textContent = '';
    c1.textContent = '';
    c2.textContent = '';
    c3.textContent = '';
    currentValues = ['','','',
                    '','','',
                    '','',''];
    counter= 0;
}

function winGame(currentVal){
    let row1 = currentValues[0] + currentValues[1] + currentValues[2];
    let row2 = currentValues[3] + currentValues[4] + currentValues[5];
    let row3 = currentValues[6] + currentValues[7] + currentValues[8];
    let column1 = currentValues[0] + currentValues[3] + currentValues[6];
    let column2 = currentValues[1] + currentValues[4] + currentValues[7];
    let column3 = currentValues[2] + currentValues[5] + currentValues[8];
    let diagon1 = currentValues[0] + currentValues[4] + currentValues[8];
    let diagon2 = currentValues[2] + currentValues[4] + currentValues[6];
    if(row1 == "XXX"    ||
       row1 == "OOO"    ||
       row2 == "XXX"    ||
       row2 == "OOO"    ||
       row3 == "XXX"    ||
       row3 == "OOO"    ||
       column1 == "XXX" ||
       column1 == "OOO" ||
       column2 == "XXX" ||
       column2 == "OOO" ||
       column3 == "XXX" ||
       column3 == "OOO" ||
       diagon1 == "XXX" ||
       diagon1 == "OOO" ||
       diagon2 == "XXX" ||
       diagon2 == "OOO" 
       ){
        gameText.textContent = `${currentVal} wins!`
        clearBoard();
    }
}

function tiedGame(){
    gameText.textContent = "You tied!"
}



aa.addEventListener("click",function () {
    playMove(a1,0) } );
ab.addEventListener("click",function () {
    playMove(a2,1) } );
ac.addEventListener("click",function () {
    playMove(a3,2) } );
ba.addEventListener("click",function () {
    playMove(b1,3) } );
bb.addEventListener("click",function () {
    playMove(b2,4) } );
bc.addEventListener("click",function () {
    playMove(b3,5) } );
ca.addEventListener("click",function () {
    playMove(c1,6) } );
cb.addEventListener("click",function () {
    playMove(c2,7) } );
cc.addEventListener("click",function () {
    playMove(c3,8) } );