function printCuteAnimals(array) {
    if(Array.isArray(array)) {
      console.log(array);
      console.log(array.length);
      console.log(array.pop());
      console.log(array.length);
      var array_new = ["hyena", "chubacapra"];
      var final_array = array.concat(array_new);
      console.log(final_array);
    }
    return final_array;
  }
  
  var array = ["snake", 'shark','tarantula', 'posionous frogs'];
  printCuteAnimals(array);