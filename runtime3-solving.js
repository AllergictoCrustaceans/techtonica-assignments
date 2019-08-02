/* Runtime Exercise 3: Designing algorithms and writing code
How would you solve the following problems? 
Can you think of an O(n^2), O(n log n), and O(n) solution to each problem?
If you have time, code one of the functions you thought of to solve the problem.
*/

/* 
Find the integer that occurs most frequently in an array
Examples: 
- `[1,4,5,4,2,2,4]` returns `4`
*/

//Runtime Complexity: O(n^2), 
function question1(array) {
    if(Array.isArray(array)) {
        var result = [];
        var obj = {};
        for(let i = 0; i < array.length; i++) {
            obj[array[i]] = 0;
            console.log(obj[array[i]]);
        }
        for(i in obj) {
            result.push(i);
        }
        return result;
    }
}

question1([1,2,3,2,5,5]);

/* 
Write a function that takes an array of numbers and returns the greatest difference you can get by subtracting any two of those numbers.
Examples:
- `[1, 5, 3, 1, 15]` returns `14`
*/
function question2(array) {
    if(Array.isArray(array)) {
        for(let i = 0; i < array.length; i++) {
            for(let j = 0; j < array.length; j++) {
                console.log(array[i], array[j]);
                if(array[i] === array[j]) {
                    console.log(array[j]); 
                }
                else {
                    console.log('no matches');
                }
            }
        }
    }
}

question2([4,8,2,3,1]);

/*
Find the only element in an array that only occurs once
Examples:
- `[3,5,3,4,6,6,4]` returns `5`
*/

function question3(array) {
    //if this only occurs once. 
}



/*Find the common elements of 2 integer arrays
Examples:
- `([1,3,2,5], [3,9,8,1])` returns `[1, 3]`
*/

function question4(array1, array2) {
    //same as question 1.
}


/*Determine if 2 Strings are anagrams (use the same letters re-arranged)
Examples: 
- `("cat", "act")` returns `true`
- `("at", "tat")`  returns `false`
- `("cat", "dog")` returns `false`
*/

function question5(string1, string2) {
    //for loop 
    //regex if string1 and string2 all include the same letters. 
}

/*Check if a String is composed of all unique characters
Examples:
- `"banana"` returns `false`
- `"bacon"` returns `true`
*/

function question6(string) {
    //for each i < string.length; i++
        //if each character occurs once
            //return true
        //else
            //return false
}

/*
Sources:
- https://www.reddit.com/r/cscareerquestions/comments/20ahfq/heres_a_pretty_big_list_of_programming_interview/
- http://blog.teamtreehouse.com/passing-google-interview-without-computer-science-degree
*/