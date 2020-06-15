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


let counter = 0;
function playMove(clicked,value){
if(currentValues[value] != 'X' && currentValues[value] != 'O') {
    if(counter % 2 === 0){
        currentValues[value] = 'X'
    } else{
        currentValues[value] = 'O'
    }
    let newText = currentValues[value];
    console.log (newText);
    clicked.textContent = newText;
    counter ++;
}
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