function ginortSOrder(input) {
  // 1. Split the string into an array of characters
  const chars = input.split('');

  // 2. Filter characters into four distinct categories
  const lower = chars.filter(c => /[a-z]/.test(c)).sort();
  const upper = chars.filter(c => /[A-Z]/.test(c)).sort();
  const odd = chars.filter(c => /[0-9]/.test(c) && parseInt(c) % 2 !== 0).sort();
  const even = chars.filter(c => /[0-9]/.test(c) && parseInt(c) % 2 === 0).sort();

  
  return [...lower, ...upper, ...odd, ...even].join('');
}


const input2 = "Sorting4321";

console.log("Output: " + ginortSOrder(input2)); 