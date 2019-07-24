function calculate(num1, string, num2) {
    if((string === "+" || "-" || "*" || "/" || "%" ) && typeof num1 === "number" && typeof num2 === "number") {
      var result = eval(num1 + string + num2);
    }
    else {
      console.log(`Something's not right.`);
    }
    console.log(result);
  }
  
  calculate(2, "*", 5);
  calculate(2, "+", 5);
  calculate(2, "-", 5);
  calculate(2, "/", 5);
  calculate(2, "%", 5);