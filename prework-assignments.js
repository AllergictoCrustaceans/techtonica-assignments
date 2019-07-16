// Welcome to the prework assessment!

// Exercise 1. Declare a variable called animal and give it a value of your choice
var animal = "Horse";

// Exercise 2. Write a conditional that does the following:
// If the value of animal is "lion", print to the console "I'm scared!"
// If the value of animal is "dog", print to the console "So cute"
// If the value of animal is "frog", print to the console "Ribbit ribbit"
// For any other value, print "Just another animal"
function whatAnimal(animal) {
    if (animal === "lion") {
        console.log("I'm scared!");
    } else if(animal === "dog") {
        console.log("So cute");
    } else if(animal === "frog") {
        console.log("ribbit ribbit");
    } else {
        console.log("Just another animal");
    }
}

whatAnimal("Horse"); 

// Exercise 3. Declare 2 variables called person1Age and person2Age and give them values of your choice.
// Write a conditional that does the following:
// If both ages are less than 18, print "You are both children"
// Otherwise, print "At least one adult here" 
var person1Age = 4;
var person2Age = 99;
function AdultorNah(person1Age, person2Age) {
    if(person1Age < 18 && person2Age < 18) {
        console.log("You are both children");
    } else {
        console.log("At least one adult here");
    }
}

AdultorNah(4, 25);

// Exercise 4. Write a for loop that prints the integers starting 
// at 20, and counts down to 10. (Include 20 and 10)
 for(let i = 20; i >= 10; i--) {
    console.log(i);
}

// Exercise 5. Write a while loop that prints the multiples of 5 from 5 to 50 inclusive 
// (i.e. 5, 10, 15, 20 ...)
var i = 0;
while(i < 50) {
    i += 5;
    console.log(i);
}

// Exercise 6. Declare a variable called 'flavors' that is an array of 3 ice cream flavors
var flavors = ['Mint Chip', 'Strawberry Shortcake', 'Moose Tracks'];

// Exercise 7. Update the second element of the array to be a different value
flavors[1] = "Cookie Dough";

// Exercise 8. Add 2 more items to the array
flavors.push("Green Tea", "Cake");

console.log(flavors);

// Exercise 9. Write a function called multiply that takes in 3 numbers, and returns
// the product of the 3 numbers multiplied together
function multiply(num1, num2, num3) {
    console.log(num1 * num2 * num3);
}

multiply(4, 9, 8);

// Exercise 10. Write a function that takes in an integer. The function should print all
// integers from 1 to that number. Next to each one it should print whether 
// it is even or odd. For example, if the number is 4, print:
// 1 odd
// 2 even
// 3 odd
// 4 even
function what(int) {
    var is = int;
    for(let i = 1; i < is; i++) {
        if(i % 2 === 0 ) {
            console.log(` ${i} even`);
        }
        else {
            console.log(`${i} odd`);
        }
    }
}

what(10);

// Exercise 11. Make an object called pet that contains 2 properties:
// animal (representing what type of animal the pet is)
// age (representing the age of the pet)
var pet = {
    animal: "horse",
    age: 7
}

// Exercise 12. Print the pet's age
console.log(pet.age);

// Exercise 13. Update pet's age to be a different value
pet.age = 14;

// Exercise 14. In the comments below, write a sentence explaining what each of the following data types are.
// String: A word, or words, or a chain of characters
// Number: A value, either a float or an integer
// Boolean: A datatype that returns either a true or false 
// Array: A single variable that stores different elements within itself. 
// Object: A collection of data in the form of "key: value" pairs. 
// undefined: A variable that has been declared, but not defined. 


//Exercise 15 Add. a new file to the $PATH environmental variable
export PATH=$PATH:$HOME/what/why

//Exercise 16. Please explain how the internet works. Your answer should include answers to the following questions: 
// The internet physically connects and transmits information through cables, binary information, and communicates with other devices through identifying IP addresses. 

//How are the devices on the internet physically connected to each other? 
//Devices on the internet are physically connected to each other via binary information of bits (0 or 1).

//How is information physically transmitted from device to device?
//Information is physically transmitted from device to device through electricity(copper wire), light (fiber optic cables underground/underwater) , or wavelengths (wifi). 


//How does one device find another it’s trying to communicate with?
//To check the IP address of the users' URL: Browser =>  OS => Resolving name server => Root name server OR Top Level Domain server OR Authoritative Name Servers. The resolving name server would know which network server to check for the IP address based on the URL's domain registrar. After retrieving IP address from any one of the servers, the resolver bounces information back to the OS, who bounces information back to the browser, who can load the URL page the user typed in.

//What methods do devices on the internet use to communicate?
//Devices can talk to one another via each of their network card and MAC address. When a packet with a particular MAC address is sent, it is sent to a router. Then the router uses the BGP protocol to determine where the packet should go.

// The following questions are bonus questions! Only work on them once you’ve finished all other questions.


// Bonus 1. Write a function that takes in a string and returns the number of times the 
// character "a" appears in the string.


// Bonus 2. Write a function that takes a string and returns which character appears the 
// most times in the string.




