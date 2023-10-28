//CHALLENGE 1

//Create an arrays called shoppingLis using square brackets.

// let shopppingList = ['Lemon', 'Orange', 'Milk', 'Bread', 'Meat'];
// console.log(shopppingList);

// //CHALLENGE 2
// //Modify the shopppingList array to use the 'new' keyword rather than the square brackets.keep elements the same.

// var shopppingList = new Array ('Lemon', 'Orange', 'Milk', 'Bread', 'Meat')
// console.log(shopppingList) ;

//CHALLENGE 3 
// Create new array that has elements of mixed data types, make the first element Boolean data type second element Number data type and the last element String data type.
// let mixedValueArray = [true,25,'Mohamed'];
// console.log(mixedValueArray); 

//CHALLENGE 4
// Using the element of index 1 from the mixedValueArray, Multiply it by 5 and store the result in a variable. Finally, print the result to the console
  
// let mixedValueArray = [true,25,'Mohamed'];
// console.log(mixedValueArray);
// let result = mixedValueArray[1] * 5;
// console.log(result)
  
//CHALLENGE 5
// Get the total count of elements of the shoppingList
var shopppingList = new Array ('Lemon', 'Orange', 'Milk', 'Bread', 'Meat')
console.log(shopppingList.length) ;

//CHALLENGE 6
// Add a new element called 'Salt to the end of shopppingList array. Make sure you use Array methods.
var shopppingList = new Array ('Lemon', 'Orange', 'Milk', 'Bread', 'Meat')
shopppingList.push('salt')
console.log(shopppingList) ;

//CHALLENGE 7
// Remove the 'Salt' element from the shoppingList array, using the array method that removes an element from the end of the array.
var shopppingList = new Array ('Lemon', 'Orange', 'Milk', 'Bread', 'Meat')
shopppingList.pop('salt')
console.log(shopppingList) ;


//CHALLENGE 8
// Add a new element to the BEGINNING of the shoppingList array, the element value shoulkd be 'Banana'. Use Array methods.
var shopppingList = new Array ('Lemon', 'Orange', 'Milk', 'Bread', 'Meat')
shopppingList.unshift('Banana')
console.log(shopppingList) ;

//CHALLENGE 9
// Remove the fisrt element of the shoopingList array, the 'Banana' element should be removed.
var shopppingList = new Array ('Lemon', 'Orange', 'Milk', 'Bread', 'Meat')
shopppingList.shift()
console.log(shopppingList) ;

//CHALLENGE 10  
// Using the Array.forEach() method, console log the elements in the shoppingList array by prefixing every element the 'I need' text.for example:- 'i need Lemon' etc.
// ananimas fucntion- functionka magacaq lehen
 
shopppingList.forEach (function addINeed (elements, index) {
    console.log("I need " + elements)
}
);

// function addINeed (elements, index) {
//     console.log("I need " + elements)
// }

// shopppingList.forEach (addINeed);

// function addINeed (elements, index) {
//     console.log("I need " + elements)
// }




