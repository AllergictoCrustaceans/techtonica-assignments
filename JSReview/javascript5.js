function calculate(num1, string, num2) {
    if((string === "+" || "-" || "*" || "/" || "%" ) && typeof num1 === "number" && typeof num2 === "number") {
        switch(true) {
            case string === "+":
                console.log(num1 + num2);
                break;
            case string === '-':
                console.log(num1 - num2);
                break;
            case string == '*':
                console.log(num1 * num2);
                break;
            case string === '/':
                console.log(num1 / num2);
                break;
            case string === '%':
                console.log(num1 % num2);
                break;
            default:
                console.log(`Something's not right.`);
        }
    }
}

calculate(2, "*", 5);
calculate(2, "+", 5);
calculate(2, "-", 5);
calculate(2, "/", 5);
calculate(2, "%", 5);





function movieNightSwitch(array) {
    if(Array.isArray(array)) {
        switch(true) {
            case array.includes('David'):
                console.log(['David', 'Alex', 'Breanna']);
                break;
            default: 
                console.log(['Priya', 'Ming', 'Breanna']);
                break;
        }
    }
}

movieNightSwitch(['Priya', 'David', 'Alex']);
movieNightSwitch(['Priya', 'David', 'Ming']);
movieNightSwitch(['Priya', 'Breanna', 'Alex']);
movieNightSwitch(['Priya', 'Breanna', 'Ming']);
movieNightSwitch(['Breanna', 'Alex', 'Ming']);
movieNightSwitch(['David', 'Breanna', 'Alex']);
movieNightSwitch(['David', 'Alex', 'Ming']);
movieNightSwitch(['Alex', 'Ming', 'Priya']);
movieNightSwitch(['David', 'Breanna', 'Ming']);
movieNightSwitch(['Priya', 'David', 'Breanna']);