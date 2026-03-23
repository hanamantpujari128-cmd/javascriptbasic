function findLargest(num1, num2) {
    if (num1 >= num2) {
        return num1;
    } else {
        return num2;
    }
}


console.log("Largest of 12 and 8 is:", findLargest(12, 8));   // Output: 12