// Resources used to help understand recursion: Stack Overflow

// Define helper function firstChar to return the character at the first index
function firstChar(aString) {
    return str.slice(0,1);
}

//Define helper function secondChar to return the character that's the last index of thr string.
function lastChar(aString) {
    return str.slice(-1);
}

//Define helper function middleChar that returns all the characters in between the first and last character.
function middleChar(aString) {
    return str.slice(1,-1);
}

function isPalindrome(aString) {
    if(aString.length < 2) { // if the string length is less than 2
        return true; // return true and recursion ends. ( base function )
    } 

    if(firstChar(aString) == lastChar(aString)) { // if the first and last characters match,
        return isPalindrome(middleChar(aString)); //then check if the first and last characters of the middleStr match. (recursion function)
    }

    return false; //if none of the above conditions are satisfied, then return false.
}