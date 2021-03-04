
let table = document.getElementById('table');
let counter = 0;
let b = '';

for (let row = 0; row < 10; row++) {
  
  let a = '';
  for (let cell = counter; cell < counter + 10; cell++) {
    let td = '<td>' + (cell + 1) + '</td>';
    a = a + td;
  }

  counter = counter + 10;
  b = b + '<tr>' + a + '</tr>';

}

table.innerHTML = b;

console.log(table.innerHTML)































// ES6
// let some = `some ${table.innerHTML}`;
// ES5
// let some = 'some ' + table.innerHTML;

// console.log(some)