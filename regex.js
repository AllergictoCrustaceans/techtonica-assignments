//1
function tonica(string) {
    let regexTonica = /tonica/;
    if(regexTonica.test(string)) {
      return true;
    }
    else {
      return false;
    }
}

tonica('shetonica'); //expect true
tonica('she'); // expect false


//2 
function semantic(string) {
    let semantic = 'semantic';
    let symantec = /symantec/gi;
    if(symantec.test(string)) {
      console.log(string);
      var newString = string.replace(symantec, semantic);
      return newString;
    }
}
  
semantic('symantec'); //expect semantic
semantic('antisymantec'); //expect antisemantic


  
//3
function deleteING(string) {
    let regexING = /ing/gi;
    if(regexING.test(string)) {
      var noING = string.replace(regexING, '');
      return noING;
    }
  }
  
deleteING('writing'); //expect writ
deleteING('writING'); //expect writ
 

//4
function email(string) {
    let regexEmail = /^[^@]+@[^@]+\.[^@]+$/;
    if(regexEmail.test(string)){
        return true;
    } else {
        return false;
    }
}

email('you@gmail.com'); // expect true
email('you@'); // expect false


//5 
function array(string) {
    let regexString = /\s|,/;
    // let quote = '"';
    let arrayString = [];
    arrayString.push(string);
    console.log(arrayString);
    if(regexString.test(arrayString)) {
        var stringArrayFinal = arrayString.replace(regexString, '"');
        console.log(stringArrayFinal);
    }
}

array("Leah, Russell, Michelle");