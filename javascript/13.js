function moveZerosToEnd(arr) {
    // 1. Create an array of only the non-zero numbers
    let nonZeros = arr.filter(num => num !== 0);
    
    // 2. Create an array of only the zeros
    let zeros = arr.filter(num => num === 0);
    
    // 3. Combine them and return the result
    return [...nonZeros, ...zeros];
}

// Testing the function with the example from your image
const inputArr = [10, 0, 5, 20, 0, 12, 0];
const result = moveZerosToEnd(inputArr);

console.log("Original Array:", inputArr);
console.log("Result Array:", result);