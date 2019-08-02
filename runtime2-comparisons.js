/*
Compare the following pieces of code that have the same functionality.

For each function:
- How does it work?
- What is the runtime complexity of the function?

Which solution would be fastest for large input sizes?
*/


// The following 4 functions all look for duplicated elements in an array.
// For example, if the input is [5,2,4,5,4], the function should return [5,4] 
// because those elements are in the array twice.

/*
Judging by runtime, findDuplicatesD() may perform the best.
*/

/*
1.) This function takes in an array as a parameter, created an empty array called duplicated, then runs two FOR loops.
    For every i iterated  and incremented in the first loop, j (i+1) will also be iterated and incremented in the second loop. 
    If array index of i equals that of j, then push array index of j into the empty array. 
2.) Runtime Complexity: O(n^2), 0.178ms.
 */

console.time('findDuplicatesA');
const findDuplicatesA = (array) => {
    const duplicated = [];
    for (let i = 0; i < array.length; i++) {
      for (let j = i+1; j < array.length; j++) {
        if (array[i] === array[j]) {
          duplicated.push(array[j]);
        }
      }
    }
    return duplicated;
  }
console.timeEnd('findDuplicatesA');


/*
1.) This function takes in an array as a paramter, creates new empty arrays, and one FOR loop. 
    The for loop iterates through the array length, defines a variable value for array[i], and evaluates an if-statement.
    If the array variable seen holds the variable called value, then add the variable called value into the duplicates empty array.
    Then add the variable value into the seen empty array.
    Lastly, return duplicates array.  
2.) Runtime Complexity: O(n), 0.181ms.
*/
console.time('findDuplicatesB');
  const findDuplicatesB = (array) => {
    const seen = new Set();
    const duplicates = new Set();
    for (let i = 0; i < array.length; i++) {
      const value = array[i];
      if (seen.has(value)) {
        duplicates.add(value);
      }
      seen.add(value);
    }
    return duplicates;
  }
console.timeEnd('findDuplicatesB');

/*
1.) This function takes in an array as a parameter, sorts out the array, creates a variable called duplicates that holds an empty array, then has a FOR loop.
    As long as i < array.length -1 , i will increment. Each iteration will have a variable item, with a value array[i], and nextItem, with a value of array[i + 1].
    If the value of variable item equals the value of variable nextItem, then push the value of item into the duplicates empty array.
    Lastly, return the duplicates array. 
2.) Runtime Complexity: O(NlogN) <= maybe, 0.180ms.
*/
console.time('findDuplicatesC');
  const findDuplicatesC = (array) => {
    array.sort();
    const duplicates = [];
    for (let i = 0; i < array.length - 1; i++) {
      const item = array[i];
      const nextItem = array[i + 1];
      if (item === nextItem) {
        duplicates.push(item);
      }
    }
    return duplicates;
  }
console.timeEnd('findDuplicatesC');
  

/*
1.) This function takes in an array as a parameter, create variables called duplicated and seem that both holds an empty array, and iterates through a FOR loop.
As long as search < array.length, the for loop will create a new variable called item, which holds a value of array[search].
If the index of variable item is not -1 within the array called seen, then push variable item into the duplicated array. 
Otherwise, push variable item into the array seem.
Lastly, return the duplicated array.  
2.) Runtime Complexity: O(n), 0.175ms
*/

console.time('findDuplicatesD');
  const findDuplicatesD = (array) => {
    const duplicated = [];
    const seen = [];
    for (let search = 0; search < array.length; search++) {
      const item = array[search];
      if (seen.indexOf(item) !== -1) {
        duplicated.push(item);
      }
      seen.push(item);
    }
    return duplicated;
  }
  console.timeEnd('findDuplicatesD');


  
  // The following 3 functions all count how many times an item is in an array 
  // and return a dictionary of the counts
  // For example, if the input is [5,2,4,5,4,5], the function should return {5:3, 4:2, 2:1} 
  
/*
1.) The function takes in an array, creates a variable called counts that holds an empty object, and two FOR loops.
    As long as i < array.length, i will increment, and a variable called item equals array[i]. 
    If counts[item] is undefined, then create a new variable countForI equal to 0. Then within this if statement, create the last for loop.
    If j < array.length, j will increment, and if array[i] equals the value of variable item, increment variable countForI.
    Otherwise, if none of the conditions are met, then have counts[item] equal countForI.
    Lastly, return variable counts. 

2.) Runtime Complexity: O(n^2), 0.179ms.
*/


  console.time('countOccurencesA');
  const countOccurencesA = (array) => {
    const counts = {};
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      if (counts[item] === undefined) {
        let countForI = 0;
        for (let j = 0; j < array.length; j++) {
          if (array[j] === item) {
            countForI++;
          }
        }
        counts[item] = countForI;
      }
    }
    return counts;
  }
  console.timeEnd('countOccurencesA');




  /*
  1.) The function take in an array, creates a variable called counts that holds an empty object, sorts the array, then defines 2 more variable, and declares 1 variable.
    Then there is one FOR loop. As long as i <array.length, i will increment and have currentItem = array[i]. If currentItem equals previousItem, then increment itemCount.
    Otherwise, have counts[currentItem] equal currentItem, and have itemCount equal to 1. 
    Lastly, have counts[currentItem] equal itemCount. 
  2.) Runtime Complexity: O(n), 0.180ms
  */

  console.time('countOccurencesB');
  const countOccurencesB = (array) => {
    const counts = {};
    array.sort();
    let previousItem = undefined;
    let itemCount = 0;
    let currentItem;
    for (let i = 0; i < array.length; i++) {
      currentItem = array[i];
      if (currentItem === previousItem) {
        itemCount++;
      } else {
        counts[currentItem] = itemCount;
        previousItem = currentItem;
        itemCount = 1;
      }
    }
    counts[currentItem] = itemCount;
  }
console.timeEnd('countOccurencesB');

  
/*
1.) The function takes an array, creates a variable called counts that holds an an empty object, and iterates through a FOR loop.
    Within the for loop, the variable item holds the value of array[i]. If counts[item] is undefined, then make counts[item] equal 0.
    Otherwise, have counts[item] += 1.
    Lastly, return counts. 
2.) Runtime Complexity: O(n), 0.180ms
*/

console.time('countOccurencesC');
  const countOccurencesC = (array) => {
    const counts = {};
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      if (counts[item] === undefined) {
        counts[item] = 0;
      }
      counts[item] += 1;
    }
    return counts;
  }
console.timeEnd('countOccurencesC');