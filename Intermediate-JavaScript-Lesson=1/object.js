//CHALLENGE 1
let wadan = new Object()
console.log(wadan) 

//CHALLENGE 2
let country = {
  name : "Kenya",
  continent : "Africa",
  capacity : "Nairobi",
  //CHALLENGE 4
  getCountryNameAndPopulation : function () {
    return this.name + " " + this.mainLanguage;
}
}
//CHALLENGE 3
country.population = 51000000;
country.mainLanguage = ['English, Kiswahili'];
country.mainReligion= ['Christian, Islam'];
country.flagColors = ['Green, Black, Red, Wjie'];
country.numberOfRegions = 47; 
country.hasSea = true;
country.currency = 'Shilling, Kenya'; 
//CHALLENGE 4

// country.getCountryNameAndPopulation =  function () {
//     return this.name + " " + this.population;
// }

// first conlose
 //console.log(country.population,country.capacity);
 
 //second console
 console.log(country['mainReligion'])

 //third console
//  let {mainLanguage} = country;
//  console.log(mainLanguage)