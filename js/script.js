/**
 * Se detta som en grund att utgå ifrån.
 * Det är helt fritt att ändra och ta bort kod om ni
 * önskar lösa problemen med andra metoder.
 */
let lcd = null; // displayen
let memory = 0; // Lagrat/gamlat värdet från display
let arithmetic = null; // Vilken beräkning som skall göras +,-, x eller /
function init() {
    lcd = document.getElementById('lcd');
    let keyBoard = document.getElementById('keyBoard')
    keyBoard.onclick = buttonClick;
    let clear = document.getElementById('clear'); // skapa en variable som får värdet av id clear
    clear.onclick = memClear; // kör funktionen clearLCD och tömmer lcd när man clicker på clear knappen
    let commaT = document.getElementById('comma');
    commaT.onclick = addComma;
    let addi = document.getElementById('add');
  //  addi.onclick = addition;
    let enter = document.getElementById('enter'); //deklerera variabeln enter
    enter.onclick = calculate; // kopplar enter till funktionen calculate som ska köras vid onclick

    const result = 0;

}
/**
 * Händelsehanterare för kalkylatorns tangentbord
 */
function buttonClick(e) {
    let btn = e.target.id; //id för den tangent som tryckte ner
    // kollar om siffertangent är nedtryckt
    if (btn.substring(0, 1) === 'b') {
        let digit = btn.substring(1, 2); // plockar ut siffran från id:et
        lcd.value += digit; // skriver ut digit/ tal  genom att plocka talen från knabbar vas id har bokstaven b i form av en string
    } else { // Inte en siffertangent, övriga tangenter.
      if(btn.substring(0, 1) === 'a'){
        setOperator('+');
      }
      if(btn.substring(0, 1) === 's'){
        setOperator('-');
      }
      if (btn.substring(0, 1) === 'm') {
        setOperator('*');
      }
      if (btn.substring(0, 1) === 'd') {
        setOperator('/');
      }
    }
}
/**
 *  Lägger till siffra på display.
 */
function addDigit(digit) {
  lcd.value += digit;
}
/**
 * Lägger till decimaltecken
 */
function addComma() {
  lcd.value += "." ;
}
/**
 * Sparar operator.
 * +, -, *, /
 */

 function addition() {
  result = 0;
   memory = lcd.value;
   //arithmetic = operator;  kan vara något att tänka på / Karam
   clearLCD();
   result = lcd.value + memory;
   lcd.value = result;
 }


function setOperator(operator){

switch (operator) {
  case '+':
  memory = lcd.value;
  clearLCD();
  result = memory + lcd.value;
    lcd.value = result;
    break;
  case '-':
  memory = lcd.value;
  clearLCD();
  result = memory - lcd.value;
    lcd.value =  result;
    break;
  case '*':
  result = memory * lcd.value;
    lcd.value =  result;
    break;
  case '/':
  result = memory / lcd.value;
      lcd.value =  result;
    break;
  }
}
/**
 * Beräknar ovh visar resultatet på displayen.
 */
function calculate() {

lcd.value = result;

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
