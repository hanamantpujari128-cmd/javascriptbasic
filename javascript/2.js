
function checkResult(marks) {
  if (marks >= 40) {
    return "Pass";
  } else {
    return "Fail";
  }
}

console.log("Score 10:", checkResult(10));
console.log("Score 40:", checkResult(40)); 
console.log("Score 85:", checkResult(85)); 