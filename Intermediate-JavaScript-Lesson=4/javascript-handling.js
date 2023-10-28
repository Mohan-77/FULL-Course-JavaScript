
// //CHALLENGE 2
// function countMyName (name) {
//     alert('my name is ' + name.length + ' letters long')
  
// }


// //CHALLENGE 3
// function countMyName (name) {
//     console.log('my name is ' + name.length + ' letters long')
  
// }

// countMyName('Cade')

// //CHALLENGE 4 
// function countMyName (name) {
//     try{

//         console.log('my name is ' + name.length + ' letters long')

//     } catch (error){
//         console.log('please pass the name')
//     }
  
// }

// countMyName();


// //CHALLENGE 5
// function countMyName (name) {
//     try{

//         console.log('my name is ' + name.length + ' letters long')

//     } catch (error){
//         console.log('please pass the name')
//     }finally{
//         console.log('I am always shown ')
//     }
  
// }

// countMyName();


//CHALLENGE 6
function countMyName(name) {
    if (name === undefined || name === "") {
      throw new Error("Name is required");
    }
    console.log("My name is " + name.length + " letters long");
  }
  
  // CHALLENGE 7
  
  try {
    countMyName("");
  } catch (error) {
    console.error(error.message);
  }
  
