 // CHALLENGE 1
 /* wxa sameesa function javascript ah oo loo dhiibayo magac kadib soocelineeso
  magacas oo lagu hor daray hello tusaale ahan hadii loo dhibo mgacas mohamed
  waxa la doonaya iney soo celiso string ah hello mohamed kadipna aad console ka
  kusoo qorto */

  function great (name) {
    return 'hello ' + name
  }

  var name = 'mohamed';
  console.log(great('mohamed ali' ));


  // CHALLENGE 2
  function divideTwoNumbers (num1, num2){
    return num1 / num2;
  }

  console.log(divideTwoNumbers(10, 2));
   

    // CHALLENGE 3

//function expression
 var multiplyFive = function (num){
    return num * 5
}
console.log(multiplyFive(5));

 // CHALLENGE 4

 function printItWorks (){
    console.log('it works');
 }

printItWorks();

 // CHALLENGE 4

 var convertMinuteToSeconds = function(minute){
    return minute * 60;
 }

 console.log(convertMinuteToSeconds(1));

  // CHALLENGE 5
  function teamPonits (wins, draws, losses){
    return (wins * 3) + draws;
  }

  console.log(teamPonits(3,4,2))
  console.log(teamPonits(5,0,2))
  console.log(teamPonits(0,0,1))

