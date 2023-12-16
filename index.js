// Numbers to check
const numbers = [12, 25, 42, 53, 60];

// Determine if each number is even or odd using if-else statements
numbers.forEach(number => {
  let result = '';

  if (number % 2 === 0) {
    result = `Even number`;
  } else {
    result = `Odd number`;
  }
  
  console.log(`Number ${number} is ${result}`);
});