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
    clear.onclick = clearLCD; // kör funktionen clearLCD och tömmer lcd när man clicker på clear knappen
    let enter = document.getElementById('enter'); //deklerera variabeln enter
    enter.onclick = calculate; // kopplar enter till funktionen calculate som ska köras vid onclick
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
}
/**
 * Sparar operator.
 * +, -, *, /
 */
function setOperator(operator){
function addition() {
  memory = lcd.value;
  arithmetic = operator;
  clearLCD();

}

}
/**
 * Beräknar ovh visar resultatet på displayen.
 */
function calculate() {
  let result = 0;
  


  }
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
