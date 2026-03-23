function checkDisarium(num) {
    let numStr = num.toString();
    let sum = 0;

    for (let i = 0; i < numStr.length; i++) {
        
        sum += Math.pow(parseInt(numStr[i]), i + 1);
    }

    return sum === num ? "Disarium" : "Not Disarium";
}
console.log(checkDisarium(175)); 