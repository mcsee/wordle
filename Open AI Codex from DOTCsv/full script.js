// Step 1
/* create a table with 6 rows and 5 columns */

var table = document.createElement('table');
table.setAttribute('border','1');
for (var i = 0; i < 6; i++) {
  var row = document.createElement('tr');
  for (var j = 0; j < 5; j++) {
    var cell = document.createElement('td');
    cell.innerHTML = '<b>' + (i * 5 + j) + '</b>';
    row.appendChild(cell);
  }
  table.appendChild(row);
}
document.body.appendChild(table);


// Step 2
/* Cells are grey, squared of 80px 80px */

var cells = table.getElementsByTagName('td');
for (var i = 0; i < cells.length; i++) {
  cells[i].style.backgroundColor = '#ccc';
  cells[i].style.width = '80px';
  cells[i].style.height = '80px';
}


// Step 3
/* cells are half size */

for (var i = 0; i < cells.length; i++) {
  cells[i].style.width = '40px';
  cells[i].style.height = '40px';
}


// Step 4
/* there are no borders */

table.style.border = 'none';


// Step 5
/* Cells have no border */

for (var i = 0; i < cells.length; i++) {
  cells[i].style.border = 'none';
}


// Step 6
/* Text is centered */

for (var i = 0; i < cells.length; i++) {
  cells[i].style.textAlign = 'center';
}


// Step 7
/* text is white */
for (var i = 0; i < cells.length; i++) {
  cells[i].style.color = 'white';
}


// Step 8
/* text is font helvetica and bold */

for (var i = 0; i < cells.length; i++) {
  cells[i].style.fontFamily = 'Helvetica';
  cells[i].style.fontWeight = 'bold';
}


// Step 9
/* cells have no padding */

for (var i = 0; i < cells.length; i++) {
  cells[i].style.padding = '0px';
}


// Step 10
/* cells are empty */

for (var i = 0; i < cells.length; i++) {
  cells[i].innerHTML = '';
}


// Step 11
/* add an input text field under the table */

var input = document.createElement('input');
input.setAttribute('type','text');
input.setAttribute('placeholder','Write Something');
document.body.appendChild(input);


// Step 12
/* add margin reduce text field width to 100px */

input.style.margin = '10px';
input.style.width = '100px';


// Step 13
/*add a button by the field with 'tick' character. Button must have un id named 'validate' */

var button = document.createElement('button');
button.innerHTML = '&#10003;';
button.id = 'validate';
document.body.appendChild(button);


//Step14
/* add another button with id 'remove' and the 'x' character as label */

var button = document.createElement('button');
button.innerHTML = '&#10007;';
button.id = 'remove';
document.body.appendChild(button);


// Step 15
/* center box text */

input.style.textAlign = 'center';


// Step 16
/* we cannot write more than 5 characters in the input field */

input.setAttribute('maxlength','5');


// Step 17
/* create variable named 'rowindex' starting at 0 */

var rowIndex = 0;

// Step 18
/* when entering text in the box, convert it to uppercase */

input.addEventListener('keyup', function(event) { 
  event.target.value = event.target.value.toUpperCase();
});				   


// Step 20

/* after writing on the text field, the value from every character will be writen on each cell of the selected row */
input.addEventListener('keyup', function(event) {
  var cells = document.querySelectorAll('td');
  for (var i = 0; i < cells.length; i++) {  
	if (i >= rowIndex * 5 && i < (rowIndex + 1) * 5) {    
	  cells[i].innerHTML = input.value.charAt(i - rowIndex * 5);
    }
  }
});


// Step 21
/* store in a variable the secret word 'PAPER' */

var secretWord = 'PAPER';


// Step 22
/* When clicking validate button, we need to check if the characters of the chosen row are included in the secret word. If they are, the cell should be marked as yellow (#edc953) */
document.getElementById('validate').addEventListener('click', function(event) { 
  var cells = document.querySelectorAll('td');
  for (var i = 0; i < cells.length; i++) {
    if (i >= rowIndex * 5 && i < (rowIndex + 1) * 5) {
      if (secretWord.indexOf(cells[i].innerHTML) >= 0) {
        cells[i].style.backgroundColor = '#edc953';
      }
    }
  }
});


// Step 23
/* if character is in right position, cell should be in green (#aedb95) */

document.getElementById('validate').addEventListener('click', function(event) {
   for (var i = 0; i < cells.length; i++) {
    if (i >= rowIndex * 5 && i < (rowIndex + 1) * 5) {
      if (secretWord.charAt(i - rowIndex * 5) === cells[i].innerHTML) {
        cells[i].style.backgroundColor = '#aedb95';
      }
    }
  }
});


// Step 24
	  
/* when clicking validate button, rowIndex variable increases */

document.getElementById('validate').addEventListener('click', function(event) {
  rowIndex++;
});


// Step 25

/* when pushing remove button, every letter is erased, rowIndex goes to 0 and all cells turn gray */ 

document.getElementById('remove').addEventListener('click', function(event) {
  var cells = document.querySelectorAll('td');
  for (var i = 0; i < cells.length; i++) {
    cells[i].innerHTML = '';
    cells[i].style.backgroundColor = '#ccc';
  }
  rowIndex = 0;
});


// Step 26
 
/* save a collection of the following words: tools, super, faker, catch, cried in uppercase */

var words = ['TOOLS', 'SUPER', 'FAKER', 'CATCH', 'CRIED'];


// Step 27

/* when pressing remove, chose randomly the secret word from the words collection */ 

document.getElementById('remove').addEventListener('click', function(event) {
  var randomIndex = Math.floor(Math.random() * words.length);
  secretWord = words[randomIndex];
});
