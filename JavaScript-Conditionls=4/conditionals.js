//CHALLENGE 1
var salat = 'sunnah';
  
if(salat == 'subxi') {
console.log('pray 2 rakaca')
//CHALLENGE 2
} else if (salat == 'casar') {
    console.log('pray 4 rakaca')

} else if (salat == 'maqrib') { 
    console.log('pray 3 rakaca')

}else if (salat == 'cishe') {
    console.log('pray 4 rakaca')

}else if (salat == 'sunnah') {
    console.log('pray 2rakaca')
     
}

else{
    console.log('ask to the sheikh')
}

console.log('----------------------------------');

 //CHALLENGE 3
//Nested if
var dugsiHose = true;
var dugsiDhexe = true;
var dugsiSare = false;
var jamacad = true;

if(dugsiHose == true) {
    console.log('Dugsi Hoose waa Dhigatay');
 if (dugsiDhexe) {
        console.log('Dugsi   Dhexe waa Dhigatay');
        if(dugsiSare){
            console.log('Dugsi   Satre waa Dhigatay');
            if(jamacad){
                console.log('jaamaca   waa Dhigatay');


            }else{
                console.log('Jaamaca Maadan dhigan'); 
            }
            
        }else{
            console.log('Dugsi   Sare Maadan dhigan'); 
        }

    } else{
        console.log('Dugsi   Dhexe Maadan dhigan'); 
    }

}else{
    console.log('Dugsi Hoose Madaan Dhigan')
}

//CHALLENGE 4
var tiro = 13

switch (tiro) {
    case 1:
       console.log('one') 
        break;

     case 2:
       console.log('Two') 
        break;

       case 3:
          console.log('Three') 
         break;

        case 4:
          console.log('Four') 
           break;

          case 5:
            console.log('Five') 
            break;

           case 6:
              console.log('Six') 
              break;

           case 7:
             console.log('Seven') 
                 break;
                         


    default:
       console.log('1 upto 7 only understand')
}
