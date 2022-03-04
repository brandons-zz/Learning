/* ----- BMI CALCULATOR ---- */

function bmiCalculator(weight, height) {
  var interpretation;
  var bmi = (weight / Math.pow(height, 2)).toFixed(1);

  if (bmi < 18.5) {
    interpretation = "Your BMI is " + bmi + ", so you are underweight.";
  } else if (bmi > 18.5 && bmi < 24.9) {
    interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
  } else {
    interpretation = "Your BMI is " + bmi + ", so you are overweight.";
  }
  return interpretation;
}

bmi = bmiCalculator(65, 1.8);

/* LEAP YEAR CALCULATOR */

function isLeap(year) {
  var notLeapYear = "Not leap year.";
  var leapYear = "Leap year.";

  // A leap year is evenly divisble by 4
  if (!(year % 4)) {
    // except if that year is also evenly divisible by 100
    if (!(year % 100)) {
      return notLeapYear;
      // unless that year is evenly divisible by 400
    } else if (!(year % 400)) {
      return leapYear;
    } else {
      return leapYear;
    }
  } else {
    return notLeapYear;
  }
}

isLeap(2024);

var output = [];
var count = 1;
var fizz;
var buzz;

/* FizzBuzz Game */

function fizzbuzz() {
  var count = 0;
  var fizz;
  var buzz;
  var output = [];
  while (count <= 100) {
    if (count % 3 === 0) {
      fizz = true;
    }
    if (count % 5 === 0) {
      buzz = true;
    }

    if (fizz && buzz) {
      output.push("fizzbuzz");
    } else if (fizz) {
      output.push("fizz");
    } else if (buzz) {
      output.push("buzz");
    } else {
      output.push(count);
    }

    count++;
    fizz = 0;
    buzz = 0;
  }
  console.log(output);
}

//Pick a random person from an array

function whosPaying(names) {
  var numberOfPeople = names.length;
  var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
  // 0 - 5

  return names[randomPersonPosition] + " is going to buy lunch today!";
}

whosPaying(["Angela", "Ben", "Jenny", "Michael", "Chloe"]);

// Fibonacci Generator
function fibonacciGenerator(n) {
  var i = 1;
  var startingNumber = 0;
  var nextNumber = 1;
  var finalNumber;
  var returnSequence = [0];

  while (n > i) {
    if (n === 1) {
      returnSequence.push(startingNumber);
    } else if (i === 2) {
      returnSequence.push(nextNumber);
    } else {
      finalNumber = startingNumber + nextNumber;
      returnSequence.push(finalNumber);
      startingNumber = nextNumber;
      nextNumber = finalNumber;
    }
    i++;
  }
  return returnSequence;
}

output = fibonacciGenerator(10);
console.log(output);
