 //CHALLENGE 1

 var firstName = "Cade";
 let age = 22;               // Global Scope
 const DISTANCE = 1.6; 

  //CHALLENGE 2 
  function agePlusTen() {
   let newAge = age + 10;       // Local Scope
     //CHALLENGE 3
     function newAgePlusTwenty(){
        let anotherNewAge = newAge + 20;
        return anotherNewAge;
     }
   return newAgePlusTwenty(); // Tan Micneheeda waxa waaye wixi ritaanka ah la soo celiyay ayaa hadana tan sii celineesa
  }

  console.log(agePlusTen());


     //CHALLENGE 4
     const COUNTRY = "Somalia";
     COUNTRY = "Kenya";
  