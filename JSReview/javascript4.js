// PART 1: Function only work under the assumption that nested array length is known.

function printVacations(array) {
    if(Array.isArray(array)){
      for(let i = 0; i < array.length; i++) {
        console.log(`${array[i][0]} is going to ${array[i][1]}.`);
      } 
    } 
  }
  
  array = [ ['Katie', 'New Zealand'], ['Julie', 'Banff, Alberta, Canada'], ['Jameela', 'UpsideDown'] ];
  
  printVacations(array);
  
  
  
  
  // PART 2: 
  function printVacations2(array2) {
    if(Array.isArray(array2)) {
      for(let i = 0; i < array2.length; i++) {
        let places = array2[i][1];
        let placesResult = '';
        for(let j = 0; j < places.length; j++) {
          var place = places[j];
          if(j === places.length - 1){
            placesResult += ' or ';
          } else if(j !== 0){
            placesResult += ', ';
          }
          placesResult += place
        }
        console.log(`${array2[i][0]} is going to ${placesResult}`);
      }
    }
  }
  
  array2 = [ ['Katie', ['Finland', 'New Zealand', 'Hawaii']], ['Julie', ['Banff, Alberta, Canada', 'Austria']], ['Jameela', ['UpsideDown', 'Hogwarts']] ]
  
  printVacations2(array2);