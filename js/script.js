

/**
 * Se detta som en grund att utgå ifrån.
 * Det är helt fritt att ändra och ta bort kod om ni
 * önskar lösa problemen med andra metoder.
 */

let lcd = null; // displayen

let memory = 0; // Lagrat/gamlat värdet från display
let arithmetic = null; // Vilken beräkning som skall göras +,-, x eller /
console.log(memory);
function init() {
    lcd = document.getElementById('lcd');
    //lcd.value = 1
    //lcd.value = lcd.value + "2";
    let keyBoard = document.getElementById('keyBoard')
    keyBoard.onclick = buttonClick;
    let clear = document.getElementById('clear');
    clear.onclick = clearLCD;
}

/**
 * Händelsehanterare för kalkylatorns tangentbord
 */
function buttonClick(e) {
    let btn = e.target.id; //id för den tangent som tryckte ner


    // kollar om siffertangent är nedtryckt
    if (btn.substring(0, 1) === 'b') {
        let digit = btn.substring(1, 2); // plockar ut siffran från id:et
        lcd.value += digit

    } else { // Inte en siffertangent, övriga tangenter.

    }
}

/**
 *  Lägger till siffra på display.
 */
function addDigit(digit) {
lcd.value = digit;

}

/**
 * Lägger till decimaltecken
 */
function addComma() {

}

/**
 * Sparar operator.
 * +, -, *, /
 */
function setOperator(operator){
function add() {
  let add = document.getElementById('add');
  if (add.onclick) {
     memory = document.getElementById('lcd').value;
  let X = memory;
   clearLCD();

   let Y = addDigit();
     memory = document.getElementById('lcd').value;
  }
  let sum = parseint(X) + parseint(Y) ;
  lcd = sum.value;
}
add.onclick = add();



}

/**
 * Beräknar ovh visar resultatet på displayen.
 */
function calculate() {
  let enter = document.getElementById('enter');
enter.onclick = lcd += e.target.id;

}

/** Rensar display */
function clearLCD() {
    lcd.value = '';
    isComma = false;
}

/** Rensar allt, reset */
function memClear(){
    memory = 0;
    arithmetic = null;
    clearLCD();
}

window.onload = init;
