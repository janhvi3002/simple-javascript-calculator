var display = document.getElementById('display');
var formulaDisplay = document.getElementById('formula');
const buttons = document.querySelectorAll('button');
var input = "";
var formula = "";

// number buttons
// takes button element as argument based on its index
var number = (num) => {
  const number = num.innerHTML;
  
  if(input == "/" || input == "*" || input == "+"      || input == "-") {
      formula += input;
      formulaDisplay.innerHTML = formula;
      input = number;
      display.innerHTML = input;
      return;
    } else {
      input += number;
      display.innerHTML = input;
      return;
    }
};
// calculation characters (*, /, +, -)
//takes button element as argument based on its index
var character = (cha) => {
  const character = cha.innerHTML;
  
  
  if((input =="/" && character == "-") || (input =="*" && character == "-") || 
     (input =="+" && character == "-") || (input =="-" && character == "-")) {
    input += "-";
    display.innerHTML = input;
    return;
  }
  
  if(input =="/" || input =="*" || 
          input =="+" || input =="-" || input == "/-" || input == "*-" || input == "+-" || input == "--") {
    input = character;
    display.innerHTML = input;
    return;
  } else {
    formula += input;
    formulaDisplay.innerHTML = formula;
    input = character;
    display.innerHTML = input;
    return;
  }
  
}
// button for 0
//checks if 0 can be added (if state is not 0 already)
var zero = () => {
  if (input == "0" || input == "") {
    return;
  }
  else {
    input += "0";
    display.innerHTML = input;
    return;
  };
}


// handles the calculation
var equals = () => {
  formula += input;
  var answer = eval(formula);
  formulaDisplay.innerHTML = formula + " = " + parseFloat(answer);
  display.innerHTML = parseFloat(answer);
  input = "";
  formula = parseFloat(answer);
}
// add decimal
var decimal = () => {
  var last = input.charAt(input.length -1);
  if (input.includes(".") == true) {
    return;
  }
  if (last != ".") {
    input += ".";
    display.innerHTML = input;
    return;
  } else {
    return;
  }
}
//eventListener for all calculator buttons
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function()   {
    switch(buttons[i]) {
      case buttons[0]:
        formula = "";
        formulaDisplay.innerHTML = formula;
        input = "";
        display.innerHTML = "0";
        break;
      case buttons[1]:
        character(buttons[i]);
        break;
      case buttons[2]:
        character(buttons[i]);
        break;
      case buttons[3]:
        number(buttons[i]);
        break;
      case buttons[4]:
        number(buttons[i]);
        break;
      case buttons[5]:
        number(buttons[i]);
        break;
      case buttons[6]:
        character(buttons[i]);
        break;
      case buttons[7]:
        number(buttons[i]);
        break;
      case buttons[8]:
        number(buttons[i]);
        break;
      case buttons[9]:
        number(buttons[i]);
        break;
      case buttons[10]:
        character(buttons[i]);
        break;
      case buttons[11]:
        number(buttons[i]);
        break;
      case buttons[12]:
        number(buttons[i]);
        break;
      case buttons[13]:
        number(buttons[i]);
        break;
      case buttons[14]:
        equals();
        break;
      case buttons[15]:
        zero();
        break;
      case buttons[16]:
        decimal();
        break;   
      default:
        break;
    }
    
  });
}
