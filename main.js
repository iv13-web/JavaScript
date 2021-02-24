// let test = document.getElementById('app');
// let test = document.getElementsByClassName('title')
// let test = document.querySelector('.title');

// console.log(test);



// let guest = prompt('What is your name?');
// let some = confirm('some')


// let myObject = {
//   some: 'sadgs',
//   another: {
//     something: 'dgsdg',
//     dog: 'brown'
//   }
// }

// let myArray = ['sadgsd', 'sdagasd', 'third element'];

// console.log(myObject.another.dog)

// let question = confirm('Hide this object?')
// let myTitle = document.querySelector('.title');
// console.log(myTitle.classList)

// if (question === true) {
//   myTitle.classList.add('hide');
// }


// let test = document.getElementById('app');
// test.innerHTML = '<h1>sdgsd</h1>';


// let wineLabels = ['Red', 'white', 'dry']

// console.log(wineLabels.length)

// let age = prompt('How old are you?');
// console.log(age);
// let list = document.getElementById('wines')
// let age = 21;



// if (age >= 18) {
//   document.querySelector('.wine').classList.remove('wine');
//     for (let i = 0; i < wineLabels.length; i++) {
//       list.innerHTML = list.innerHTML + '<li>' + wineLabels[i] + '</li>';
//     }
  // console.log(wineLabels);
  // list.innerHTML = '<li>' + wineLabels[0] + '</li>';
  // list.innerHTML = list.innerHTML + '<li>' + wineLabels[1] + '</li>';
  // list.innerHTML = list.innerHTML + '<li>' + wineLabels[2] + '</li>';


// } else {
//   document.querySelector('.sorry').classList.remove('sorry');
// }




// for (let i = 0; i < wineLabels.length; i++) {
//   console.log(i)
// }



// if (carShowroom.stock != 'Honda' && carShowroom.stock.length > 2) {
//   console.log(carShowroom.stock);
//   if (carShowroom.out.length) {
//     console.log('alright');
//   }
// } else {
//   console.log(carShowroom.out);
// }


// TASK 1 - A
let numMinArray = [7, 4, 11, 3];
if (numMinArray[0] < numMinArray[1] && numMinArray[0] < numMinArray[2] && numMinArray[0] < numMinArray[3]) {
  console.log(numMinArray[0]);
} else if (numMinArray[1] < numMinArray[0] && numMinArray[1] < numMinArray[2] && numMinArray[1] < numMinArray[3]) {
  console.log(numMinArray[1]);
} else if (numMinArray[2] < numMinArray[0] && numMinArray[2] < numMinArray[1] && numMinArray[2] < numMinArray[3]) {
  console.log(numMinArray[2]);
} else if (numMinArray[3] < numMinArray[0] && numMinArray[3] < numMinArray[1] && numMinArray[3] < numMinArray[2]) {
  console.log(numMinArray[3]);
}


let numMaxArray = [7, 4, 11, 3];
if (numMaxArray[0] > numMaxArray[1] && numMaxArray[0] > numMaxArray[2] && numMaxArray[0] > numMaxArray[3]) {
  console.log(numMaxArray[0]);
} else if (numMaxArray[1] > numMaxArray[0] && numMaxArray[1] > numMaxArray[2] && numMaxArray[1] > numMaxArray[3]) {
  console.log(numMaxArray[1]);
} else if (numMaxArray[2] > numMaxArray[0] && numMaxArray[2] > numMaxArray[1] && numMaxArray[2] > numMaxArray[3]) {
  console.log(numMaxArray[2]);
} else if (numMaxArray[3] > numMaxArray[0] && numMaxArray[3] > numMaxArray[1] && numMaxArray[3] > numMaxArray[2]) {
  console.log(numMaxArray[3]);
}


// TASK 1 - B
let numAverageArray = [7, 4, 11, 3];
let sum = (numAverageArray[0] + numAverageArray[1] + numAverageArray[2] + numAverageArray[3]);
let sumAverage = (sum / numAverageArray.length)
console.log("Среднее арифмитическое значение суммы всех чисел массива равняется ", sumAverage);

// TASK 1 - C - НЕДОСТАТОЧНО АБСТРАКТНО, при замене значений не работает
let numSqrArray = [7, 4, 11, 3];
if (numSqrArray[0] < numSqrArray[1] && numSqrArray[0] < numSqrArray[2] && numSqrArray[0] < numSqrArray[3]) {
  var x = (numSqrArray[0]);
} else if (numSqrArray[1] < numSqrArray[0] && numSqrArray[1] < numSqrArray[2] && numSqrArray[1] < numSqrArray[3]) {
  var x = (numSqrArray[1]);
} else if (numSqrArray[2] < numSqrArray[0] && numSqrArray[2] < numSqrArray[1] && numSqrArray[2] < numSqrArray[3]) {
  var x = (numSqrArray[2]);
} else if (numSqrArray[3] < numSqrArray[0] && numSqrArray[3] < numSqrArray[1] && numSqrArray[3] < numSqrArray[2]) {
  var x = (numSqrArray[3]);
} 
if (numSqrArray[0] > x && numSqrArray[0] <= numSqrArray[1] && numSqrArray[0] <= numSqrArray[2] && numSqrArray[0] <= numSqrArray[3]) {
  var y = (numSqrArray[0]);
} else if (numSqrArray[1] > x && numSqrArray[1] <= numSqrArray[0] && numSqrArray[1] <= numSqrArray[2]) {
  var y = (numSqrArray[1]);
} else if (numSqrArray[2] > x && numSqrArray[2] <= numSqrArray[0] && numSqrArray[2] <= numSqrArray[3]) {
  var y = (numSqrArray[2]);
} else if (numSqrArray[3] > x && numSqrArray[3] <= numSqrArray[0] && numSqrArray[3] <= numSqrArray[1]) {
  var y = (numSqrArray[3]);
}
let sqrNum = Math.sqrt(y)
console.log("Квадратный корень второго по величине числа равен ", sqrNum) 


//TASK 1 - D
let dNumMinArray = [2, 64, 13, 44];
if (dNumMinArray[0] < dNumMinArray[1] && dNumMinArray[0] < dNumMinArray[2] && dNumMinArray[0] < dNumMinArray[3]) {
  console.log(dNumMinArray[0]);
} else if (dNumMinArray[1] < dNumMinArray[0] && dNumMinArray[1] < dNumMinArray[2] && dNumMinArray[1] < dNumMinArray[3]) {
  console.log(dNumMinArray[1]);
} else if (dNumMinArray[2] < dNumMinArray[0] && dNumMinArray[2] < dNumMinArray[1] && dNumMinArray[2] < dNumMinArray[3]) {
  console.log(dNumMinArray[2]);
} else if (dNumMinArray[3] < dNumMinArray[0] && dNumMinArray[3] < dNumMinArray[1] && dNumMinArray[3] < dNumMinArray[2]) {
  console.log(dNumMinArray[3]);
}

let dNumMaxArray = [2, 64, 13, 44];
if (dNumMaxArray[0] > dNumMaxArray[1] && dNumMaxArray[0] > dNumMaxArray[2] && dNumMaxArray[0] > dNumMaxArray[3]) {
  console.log(dNumMaxArray[0]);
} else if (dNumMaxArray[1] > dNumMaxArray[0] && dNumMaxArray[1] > dNumMaxArray[2] && dNumMaxArray[1] > dNumMaxArray[3]) {
  console.log(dNumMaxArray[1]);
} else if (dNumMaxArray[2] > dNumMaxArray[0] && dNumMaxArray[2] > dNumMaxArray[1] && dNumMaxArray[2] > dNumMaxArray[3]) {
  console.log(dNumMaxArray[2]);
} else if (dNumMaxArray[3] > dNumMaxArray[0] && dNumMaxArray[3] > dNumMaxArray[1] && dNumMaxArray[3] > dNumMaxArray[2]) {
  console.log(dNumMaxArray[3]);
}


// TASK 2 - A
let hugeArray = [33, 17, 25, 75, 35, 63, 26, 86, 38, 4, 57, 46];
let max = hugeArray[0];
let min = hugeArray[0];

for (let i = 0; i < hugeArray.length; i++) {
  if (hugeArray[i] > max) {
    max = hugeArray[i];
  }
  if (hugeArray[i] < min) {
    min = hugeArray[i];
  }
} 
console.log("Значение наибольшего числа массива равняется ",max);
console.log("Значение наименьшего числа массива равняется ",min);

// TASK 2 - B
let sumTask2 = 0;
for (let i = 0; i < hugeArray.length; i++) {
  sumTask2 = sumTask2 + hugeArray[i];
}
let sumAverageTask2 = sumTask2 / hugeArray.length;
console.log("Среднее арифмитическое значение суммы всех чисел массива равняется ", sumAverageTask2)

// TASK 2 - C
let maximum = hugeArray[0];
for (let i = 0; i < hugeArray.length; i++) {
  if (hugeArray[i] > maximum) {
    maximum = hugeArray[i];
  }
}
let cube = Math.pow(maximum, 3);
console.log ("Значение самого большого числа массива в кубе равняется ", cube);
