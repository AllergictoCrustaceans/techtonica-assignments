/* 
Read the following functions. For each one, figure out:
- What does the function do? 
- Try to figure out the runtime -- O(1), O(log n), O(n), O(n log n), O(n^2), or O(2^n)
- Run the function with a few different input sizes and see how long it takes
- When the input size doubles, what happens to the time it takes to run?
*/



/* 
1.) This function takes in an array as a parameter, and uses a FOR loop to iterate through the array to find a value of 7. 
If 7 is found within the array, the function returns true, if not, then the function returns false 
2.) Runtime Complexity: O(n) 
3.) Input with array.length = 7 => runtime is 0.280ms. 
    array.length = 14 => runtime is 0.281ms.
    array.length = 7 (with no value of 7) => runtime is 0.285ms. 
4.) As shown in part 3, the doubling of array length increases runtime, and an array with no value of 7 runs longer than a long array with value of 7.
*/
console.time('mysteryFunction0');
const mysteryFunction0 = function(array) {
    const myFavoriteNum = 7;
    for (i = 0; i < array.length; i++) {
      if (array[i] === myFavoriteNum) {
        return true;
      }
    }
    return false;
  }
    // mysteryFunction0([1,2,3,4,5,6,7]);
    // mysteryFunction0([1,2,3,4,5,6,7,8,9,10,11,12,13,14]);
    // mysteryFunction0([1,2,3,4,5,6,8]);
  console.timeEnd('mysteryFunction0');
  







  /*
  1.) This function takes an array as a parameter, assigns the value 4 to a variable called index, and asks for the value from the array's 4th index. 
  2.) Runtime Complexity: O(1)
  3.) array.length = 7 => runtime is 0.255ms.
      array.length = 3 => runtime is 0.271ms.
      array.length = 6 => runtime is 0.253ms.
      array.length - 11 => runtime is 0.257ms.
  4.) As shown in part 3, increasing the array lengthh from 6 to 11 all have similar times, and off by +/-0.002. 
      array.length = 3 took longer than most maybe because the length was not enough for the function to properly execute. 
  */

  console.time('mysteryFunction1');
  const mysteryFunction1 = function(array) {
    index = 4;
    return array[index];
  }
  
//   mysteryFunction1([45,60,100,800,7, 54, 32]);
//   mysteryFunction1([0,1,2]);
//   mysteryFunction1([4,7,3,34,5,7]);
//   mysteryFunction1([4,7,3,34,5,7,18,55,66,77,88]);
  console.timeEnd('mysteryFunction1');








/* 
1.) This function takes a parameter of n, creates an empty array, and iterates through 2 FOR loops.
    1st FOR loop: As long as i < n, i will increment by 1, have variable factorFound initially be false, and proceed to the 2nd FOR loop.
    2nd FOR loop: As long as j < n, j will increment by 1, and if i is divisible by j, then have factorFound be true.
    Values that go through the for loops, and still end up with factorFound to be false will be pushed into the empty primes array. 
2.) Runtime Complexity: O(n^2)
3.) n=2 => runtime is 0.271ms
    n=4 => runtime is 0.326ms
    n=8 => runtime is 0.330ms
    n=-1 => runtime is 0.272ms
    n=0 => runtime is 0.273
4.) As shown in part 3, the runtime increases as paramter value increases to the 0.3 range.
 */

console.time('mysteryFunction2');
  var mysteryFunction2 = function(n) {
    let primes = []
    for (i = 2; i < n; i++) {
      let factorFound = false;
      for (j = 2; j < n; j++) {
        if (i % j == 0) {
          factorFound = true;
        }
      }
      if (factorFound === false) {
        primes.push(i);
      }
    }
    return primes.length;
  }

//   mysteryFunction2(2);
//   mysteryFunction2(4);
//   mysteryFunction2(8);
//   mysteryFunction2(-1);
//   mysteryFunction2(0);
console.timeEnd('mysteryFunction2');






  
  /* 
  1.) The function takes in an array, defines a variable called myLength to hold the value of the array length.
      If myLength is divisible 2, then return the string "even length". Otherwie, return the string "odd length".
  2.) Runtime Complexity: O(1) 
  3.) @ array.length = 3 runtime is 0.285ms
      @ array.length = 6, runtime is 0.292ms
      @ array .length = 6 (all even numbers), runtime is 0.291ms
      @ array.length = 7 (all odd numbers), runtime is ˜0.284ms
  4.) As shown in part 3, doubling the length does increase runtime. It also shows that an array with no even nubers yields a runtime just as short as an array length of 3. 
  */
 console.time('mysteryFunction3');
  const mysteryFunction3 = function(array) {
    myLength = array.length;
    if (myLength % 2 == 0) {
      return "even length";
    } else {
      return "odd length";
    }
  }
//   mysteryFunction3([1,2,3]);
//   mysteryFunction3([1,2,3,4,5,6]);
//   mysteryFunction3([2,4,6,8,10,12]);
//   mysteryFunction3([1,3,5,7,9,11,13]);
console.timeEnd('mysteryFunction3');









  /*
  1.) This function takes in a string, defines a variable called eCount that holds a value of 0, and has a FOR loop.
      The FOR loop will run as long as i < string.length, and i will increment. 
      Throughout the iteration, if string[i] equals string 'e', then increment variable eCount by 1. 
      Return the value of eCount after FOR loop iteration is done. 
  2.) Runtime Complexity: O(n)
  3.) string = 'apple' => runtime is 0.284ms
      string = 'formations' => runtime is 0.284ms
      string = 0 => runtime is 0.275ms
      string = 'a' => runtime is 0.278ms
      string = 'houstonfornication' => runtime is 0.286ms
  4.) As shown in part 3, a really long string length can make the runtime longer by ~ +0.002, while a string of 'a' shortens by 0.01. 
      A paramter that is not a string at all, like 0 has a short runtime as well. 
  */
  
  console.time('mysteryFunction4');
  var mysteryFunction4 = function(string) {
    let eCount = 0;
    for (i = 0; i < string.length; i++) {
      if (string[i] === 'e') {
        eCount++;
      }
    }
    return eCount;
  }
//   mysteryFunction4('apple');
//   mysteryFunction4('formations');
//   mysteryFunction4(0);
//   mysteryFunction4('a');
//   mysteryFunction4('houstonfornication');
  console.timeEnd('mysteryFunction4');








/*
1.) This function takes an array as a paramter, and sorts it in ascending order. 
2.) It depends? Source: https://blog.shovonhasan.com/time-space-complexity-of-array-sort-in-v8/
    array.length < 10  => Runtime Complexity: O(n^2)
    array.length > 10 => Runtime Complexity: O(n log n)
3.) @ array.length = 3, runtime is 0.450ms
    @ array.length = 10 (ordered), runtime is 0.453ms
    @ array.length = 10 (unordered), runtime is 0.453ms
    @ array.length = 15, runtime is 0.486ms
    @ array.length = 15 (unordered), runtime is 0.516ms
4.) Based on the answers from question 3, the longer the array, the more runtime it takes. 
 */

  console.time('mysteryFunction5');
  var mysteryFunction5 = function(array) {
    array.sort();
  }
//   mysteryFunction5([3,4,5]);
//   mysteryFunction5([1,2,3,4,5,6,7,8,9,10]);
//   mysteryFunction5([5,6,7,3,4,8,9,1,2,10]);
//   mysteryFunction5([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
//   mysteryFunction5([2,4,6,8,10,1,3,5,7,9,12,14,11,13,15]);
  console.timeEnd('mysteryFunction5');
  
/*
1.) This function takes two paramters, dict and a key, and assigns the dict[key] to a variable called value, then ultimately returns it.
2.) Runtime Complexity: O(n)
3.) 1st function  runtime is 0.208ms
    2nd function runtime is 0.205ms
    3rd function runtime is 0.205ms
    4th function runtime is 0.206ms
4.) Based on answer 3, the longer the object, the longer the runtime, but they runtimes don't differ by much.
*/

console.time('mysteryFunction6');
  const mysteryFunction6 = function(dict, key) {
    var value = dict[key];
    return value;
  }
  
//   mysteryFunction6({'Name': 'Katie', 'Age': 24, 'WaterSign': 'Pisces'}, 'WaterSign');
//   mysteryFunction6({'Name': 'Katie', 'Age': 24}, 'WaterSign');
//   mysteryFunction6({'Name': 'Katie'}, 'WaterSign');
//   mysteryFunction6({'Name': 'Katie', 'Age': 24, 'WaterSign': 'Pisces'});
console.timeEnd('mysteryFunction6');








  /*
  1.) The function takes an array as a paramter, defines variables lookingFor, lowerBound, upperBound, and guessIndex.
        As long as lowerBound <= uppderBound, evaluate if array[guessIndex] is equal to value belonging to variable lookingFor.
        If it does, return true. If lookingFor's value is less than array[guessIndex], then make upperBound = guessIndex -1.
        If none of the conditions above are met, then lowerBound = guessIndex + 1.
        After the while condition, have guessIndex value equal the rounded down value of (lowerBound + upperBound) / 2.
  2.) Runtime Complexity: O(1) 
  3.) 1st function, runtime is 0.313ms.
      2nd function, runtime is 0.321ms.
  4.) Based on answer from question 3, the longer the array, the longer the runtime. 
  */
  
  console.time('mysteryFunction7');
  const mysteryFunction7 = function(array) {
    // Assume `array` is an array of ints sorted from smallest to biggest
    const lookingFor = 9;
    let lowerBound = 0;
    let upperBound = array.length - 1;
    let guessIndex = Math.floor(upperBound / 2);
    while (lowerBound <= upperBound) {
      if (array[guessIndex] === lookingFor) {
        return true;
      } else if (lookingFor < array[guessIndex]) {
        upperBound = guessIndex - 1;
      } else {
        lowerBound = guessIndex + 1;
      }
      guessIndex = Math.floor((lowerBound + upperBound) / 2);
    }
    return false;
  }
//   mysteryFunction7([5,6,4,3,2,9,7,10]);
//   mysteryFunction7([1,2,3,4,5,6,7,8,10,9,11,12,13,14,15,16,17,18]);

  console.timeEnd('mysteryFunction7');
  


  /*
  1.) This functiont takes a dictionary as a parameter, and evaluates under each value in each key within the dictionary if the key equals the value. 
      If so, then return true. Otherwise, return false.
  2.) Runtime Complexity: O(n) 
  3.) 1st function, runtime is 0.348ms.
      2nd function, runtime is 0.332ms.
      3rd function, runtime is 0.369ms.
  4.) Based on answer 3, dictionaries that have no match between key and value take shorter runtime, while those that do have longer runtime. 
  */

  console.time('mysteryFunction8');
  const mysteryFunction8 = function(dictionary) {
    for(var key in dictionary) {
      var value = dictionary[key];
      if (key == value) {
        return true;
      }
      return false;
    }
  }
//   mysteryFunction8({'name' : 'Julie', 'band': '5SOS', 1990: 1990})
//   mysteryFunction8({'name' : 'Julie', 'band': '5SOS', 'year': 1990})
//   mysteryFunction8({'name' : 'Julie', 'band': '5SOS', 1990: 'name'})
  console.timeEnd('mysteryFunction8');
  