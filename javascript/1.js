function checkResult(marks) {
  if (marks >= 40) {
    return "Pass";
  } else {
    return "Fail";
  }
}

console.log(checkResult(10));