
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

//---------------------------------------------------------------------------------------------------------------

let table2 = document.getElementById('table2');
let magnifier = 0;

let allRows = '';
for (i = 0; i < 17; i++) {

  let oneRow = ''
  for (j = magnifier; j < magnifier + 23; j++) {
    oneRow += '<td>' + (j + 1) + '</td>';
  } 
  magnifier += 23;
  allRows += '<tr>' + oneRow + '</tr>';
}

console.log(allRows)
table2.innerHTML = allRows

//---------------------------------------------------------------------------------------------------------------

let table3 = document.getElementById('table3');

let fullTable = '';
let increaser = 0;

for (i = 0; i < 7; i++){
  
  let singleRow = '';
  for (j = increaser; j < increaser + 7; j++) {
    singleRow += '<td>' + (j + 1) + '</td>';
  }
  
  increaser += 7;
  fullTable += '<tr>' + singleRow + '</tr>';
  // console.log(fullTable);
}  

// console.log(fullTable);
table3.innerHTML = fullTable;



















// ES6
// let some = `some ${table.innerHTML}`;
// ES5
// let some = 'some ' + table.innerHTML;

// console.log(some)