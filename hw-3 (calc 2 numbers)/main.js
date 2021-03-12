
// let numbers = [];

// for (let i = 1; i <= 5; i++) {
//   let element = document.getElementById('age-' + i);
//   numbers.push( parseInt(element.innerHTML) );
// }

// function calcSum() {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum = sum + numbers[i];
//   }
//   console.log(sum)
//   return sum
// }

// function calcAverage() {
//   console.log( calcSum() / numbers.length );
// }

function getInputedValue(elementId) {
let inputedValue = +(document.getElementById(elementId).value);
return inputedValue
}


let sum = document.getElementById('calcSum');
function calcSum() {
  let a = getInputedValue('sumElement1');
  let b = getInputedValue('sumElement2');
  if (isNaN(a + b)) {
    result = '<p>' + 'Введите число, а не текст' + '</p>'
  } else {
    result = '<p>' + 'Результат: ' + (a + b) + '</p>';
  }
  sum.innerHTML = result;
}

let subtraction = document.getElementById('calcSubtraction');
function calcSubtraction() {
  let a = getInputedValue('subtractionElement1');
  let b = getInputedValue('subtractionElement2');
  if (isNaN(a + b)) {
    result = '<p>' + 'Введите число, а не текст' + '</p>'
  } else {
    result = '<p>' + 'Результат: ' + (a - b) + '</p>';
  }
  subtraction.innerHTML = result;
}

let mult = document.getElementById('calcMultiplication');
function calcMultiplication() {
  let a = getInputedValue('multElement1');
  let b = getInputedValue('multElement2');
  if (isNaN(a + b)) {
    result = '<p>' + 'Введите число, а не текст' + '</p>'
  } else {
    result = '<p>' + 'Результат: ' + (a * b) + '</p>';
  }
  mult.innerHTML = result;
}

let division = document.getElementById('calcDivision');
function calcDivision() {
  let a = getInputedValue('divisionElement1');
  let b = getInputedValue('divisionElement2');
  if (isNaN(a + b)) {
    result = '<p>' + 'Введите число, а не текст' + '</p>'
  } else {
    result = '<p>' + 'Результат: ' + (a / b) + '</p>';
  }
  division.innerHTML = result;
}

/* Хотелось бы динмамически брать ('numberA') и ('numberB') 
и выводить Результат на HTML странице, а не в консоли */
