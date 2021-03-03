

let table = document.getElementById('table');
console.log(table)
let firstNum = 1;
for (let row = 0; row < 10; row++) {
  table.innerHTML = table.innerHTML + '<tr>';
    for (let dataCell = 0; dataCell < 10; dataCell++) {
    table.innerHTML = table.innerHTML + '<td>' + firstNum++ + '</td>';
    } 
  table.innerHTML = table.innerHTML + '</tr>';
} 

