
// Micnaha: Closure waa isku duubka function-ka iyo mesha function-kaas uu ku jiro.

// Micnaha: Functions waa variable, Functions-kana banaanka wax wey kasoo qabsan karaan lakin gudaha wax kama soo jiidan karan.


// expl1
// let me = "Cade Abdi";

// function greetMe() {
//     console.log("hello " + me  + "!")
// }


// greetMe();

const counter = () => {
    let count = 0;
    return function () {
        count = count + 1; //++count
        return count;
    }
}

const newCounter =counter();
console.log(newCounter());