// Q1:
function twoNums(num1, num2) {
    if(typeof num1 === "number" && typeof num2 === "number") {
        if(num1 < num2) {
            console.log('true');
        }
        else {
            console.log('false');
        }
    }
    else {
        console.log(`This ain't a number.`);
    }
}

twoNums(4, 5); // expect true
twoNums(4.5, 3); // expect false
twoNums(Math.sqrt(3.5), 6); // expect true
twoNums(3.5, 'two'); // expect 'This ain't a number.'




// Q2:
function returnThird(array) {
    if(Array.isArray(array)) {
      if(array.length >= 3) {
            console.log(array[2]);
          } 
      else {
          console.log(`This array ain't long enough. Need at least 3 indexes.`);
      }
    }
    else {
        console.log(`This ain't an array of numbers.`);
    }
}

returnThird([12, 13, 15]); // expect 15
returnThird(['one', '13', '9']); // expect 'This ain't an array of numbers.'
returnThird([1, 2]); //expect 'This array ain't long enough....'


//Q3 
function targetInOrNah(min, max, target) {
    if(typeof min === "number" && typeof max === "number" && typeof target === "number"){
        if(min < target && target < max) {
            console.log(true);
        }
        else {
            console.log(false);
        }
    }
}

targetInOrNah(4, 5, 3.5);
targetInOrNah(5, 6, 7);
targetInOrNah(2, 8, 6);



//Q4 
function number(num) {
    if(typeof num === "number" && Number.isInteger(num) && num >= 0) {
        for(let i = 0 ; i < num; i++) {
            console.log('Hello');
        }
    }
    else {
        console.log('No Hellos.');
    }
}

number(5);
number(-1);