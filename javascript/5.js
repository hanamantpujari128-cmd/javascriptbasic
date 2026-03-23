function dashingNumbers(num) {
  return num.toString().split('').join('-');
}


const result = dashingNumbers(12345);
console.log(result); 

