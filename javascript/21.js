function isDivisibleByFive(num) {
  // Check if the remainder of num / 5 is exactly 0
  if (num % 5 === 0) {
    return "Yes";
  } else {
    return "No";
  }
}


console.log(isDivisibleByFive(25)); 