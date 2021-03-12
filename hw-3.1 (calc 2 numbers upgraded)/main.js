const resultArea = document.getElementById('resultArea');
let countHistory = [];

function calcSum() {
  let a = +(document.getElementById('calculationElement1').value);
  let b = +(document.getElementById('calculationElement2').value);
  if (isNaN(a + b)) {
    result = '<p>' + 'Введите число, а не текст' + '</p>';
  } else {
    result = '<p>' + 'Результат: ' + (a + b) + '</p>';
    countHistory.push(a + '+'  + b + '=' + (a + b));
  }  
  resultArea.innerHTML = result;
}

function calcSubtraction() {
  let a = +(document.getElementById('calculationElement1').value)
  let b = +(document.getElementById('calculationElement2').value)
  if (isNaN(a - b)) {
    result = '<p>' + 'Введите число, а не текст' + '</p>';
  } else {
    result = '<p>' + 'Результат: ' + (a - b) + '</p>';
    countHistory.push(a + '-'  + b + '=' + (a - b));
  }
  resultArea.innerHTML = result;
}

function calcMultiplication() {
  let a = +(document.getElementById('calculationElement1').value);
  let b = +(document.getElementById('calculationElement2').value);
  if (isNaN(a * b)) {
    result = '<p>' + 'Введите число, а не текст' + '</p>';
  } else {
    result = '<p>' + 'Результат: ' + (a * b) + '</p>';
    countHistory.push(a + '*'  + b + '=' + (a * b));
  }
  resultArea.innerHTML = result;
}

function calcDivision() {
  let a = +(document.getElementById('calculationElement1').value);
  let b = +(document.getElementById('calculationElement2').value);
  if  (isNaN(a / b)) {
    result = '<p>' + 'Введите число, а не текст, а также не делите 0 на 0' + '</p>';
  } else if (a / b == Infinity) {
    result = '<p>' + 'Это уже слишком' + '</p>';
  } else {
    result = '<p>' + 'Результат: ' + (a / b) + '</p>';
    countHistory.push(a + '/'  + b + '=' + (a / b));
  }
  resultArea.innerHTML = result;
}

// let firstNumberInput = document.getElementById('calculationElement1').value - не работает, если вставить в функцию ниже
// let secondtNumberInput = document.getElementById('calculationElement1').value

resetInputValue = function() {
  document.getElementById('calculationElement1').value = '';
  document.getElementById('calculationElement2').value = '';
}

addHistory = function() {
  let historyArea = document.getElementById('historytArea');
  for (i = 0; i < countHistory.length; i++) {
    countHistoryElement = countHistory[i];
  }
  historyArea.innerHTML += '<p>' + countHistoryElement + '</p>';
}








// Хотелось бы динмамически брать ('numberA') и ('numberB') 

