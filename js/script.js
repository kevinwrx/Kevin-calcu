/*
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
  clear.ondblclick = memClear;
  let commaT = document.getElementById('comma'); // skapar variabeln commaT och ger den värdet av comma
  commaT.onclick = addComma; // när man klicker på knappen med id comma som nu har samma värde som commaT då skall funktionen addComma kallas
  let enter = document.getElementById('enter'); //deklerera variabeln enter
  enter.onclick = calculate; // kopplar enter till funktionen calculate som ska köras vid onclick
  const result = 0; // skapar en varaibel med med värdet 0, const är ett sätt att deklarera variabler och liknar let
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
    if (btn.substring(0, 1) === 'a') { // kontrolerar om idet på knappen som trycks börjar med en viss bokstav, och sedan kör en funktion
      setOperator('+'); // kör funktionen setOperator('+')
    }
    if (btn.substring(0, 1) === 's') {
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
function addDigit(digit) { // digits dekleration finns längre upp
  lcd.value += digit; // adderar tal till lcd displayen, digit är siffran som finns efter bokstaven b   i idet på det valda knappen
}
/**
 * Lägger till decimaltecken
 */
function addComma() { // en funktion för att tilläga  ett kommatecken till lcd displayen
  lcd.value += ".";
}
/**
 * Sparar operator.
 * +, -, *, /
 */

function setOperator(operator) {
  switch (operator) { // switch case , ifall .... då ...
    case '+': // ifall man klicker på + då ...
      memory = lcd.value; // memory får värdet av displayen
      clearLCD(); // displayen clearas
      arithmetic = '+'; //arithmetic får värdet av '+' // se funktion längre ner!
      break;

    case '-':
      memory = lcd.value;
      clearLCD();
      arithmetic = '-';
      break;

    case '*':
      memory = lcd.value;
      clearLCD();
      arithmetic = '*'
      break;

    case '/':
      memory = lcd.value;
      clearLCD();
      arithmetic = '/';
      break;
  }
}
/**
 * Beräknar ovh visar resultatet på displayen.
 */
function calculate() {

  switch (arithmetic) { // swich case för arthimatic.
    case '+': // om arthimatic = '+',   (se längre upp  där det uppreps)
      result = Number(lcd.value) + Number(memory); // varaibelen resultat på värdet av lcd och det gamla värdet som finns i memory. Number() är för att kunna räkna med decimaltal, hade kunnat använt paresInt(), eller paresfloat()
      lcd.value = result; // resultatet sätts i lcd displayen.
      break;

    case '-':
      result = Number(memory) - Number(lcd.value);
      lcd.value = result;
      break;

    case '*':
      result = Number(lcd.value) * Number(memory);
      lcd.value = result;
      break;

    case '/':
      result = Number(memory) / Number(lcd.value);
      lcd.value = result;
      break;
    default:
  }
}

/** Rensar display */
function clearLCD() {
  lcd.value = '';
  isComma = false;
}
/** Rensar allt, reset */
function memClear() {
  memory = 0;
  arithmetic = null;
  clearLCD();
}
window.onload = init;
