
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


function calcSum() {
  let a = +(document.getElementById('numberA').value),
      b = +(document.getElementById('numberB').value),
      result = a + b;
  console.log(result)
}

/* Хотелось бы динмамически брать ('numberA') и ('numberB') 
и выводить результат на HTML странице, а не в консоли */
