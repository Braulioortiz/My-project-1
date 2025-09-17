window.addEventListener('load', ()=> {     /* to hear when load files*/

    // queryselector let to select one element by button.
    const display = document.querySelector('.calculator-display');

    // ducument.getElementByclassName let to search by class name (dont need to have point before)
    /* created two const and keep the elements that we need*/
     const keypadButtons = document.getElementsByClassName('keypad-button');

    /* created another conts to conver the htmlcollection to an ARRAY */
     const keypadButtonsArray = Array.from(keypadButtons);

    /* Iterated by our new array's button */ 
     keypadButtonsArray.forEach( (button) => {

        /* to every button added a listener event */
        button.addEventListener('click', ()=> {
          calculator(button, display);
        })
     })
}); 

function calculator(button, display) {
    switch (button.innerHTML) {
      case 'C':
       deleteLastEntry(display);
      break;

      case '=':
        calculate(display);
      break;

      default:
        update(display, button);
        break;
  }
}

function calculate(display) {
    display.innerHTML = eval(display.innerHTML) /*take the string and resolve to keep the innerHTML from display*/
}

function update(display, button) {
    if (display.innerHTML == 0) {
        display.innerHTML = '';
    }
    display.innerHTML += button.innerHTML; /* display.innerHMTL = display.innerHTML + button.innerHTML  (same thing)*/
}

function deleteLastEntry(display) {
    display.innerHTML = 0;
}