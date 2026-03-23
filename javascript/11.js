function maxWordsCanType(str, brokenLetter) {
  if (!str) return 0;

  const words = str.split(' ');
  const char = brokenLetter.toLowerCase();

  const result = words.filter(word => {
    return !word.toLowerCase().includes(char);
  });

  return result.length;
}


console.log("Result 1:", maxWordsCanType("hello world", "d")); 


console.log("Result 2:", maxWordsCanType("Coding in JavaScript", "c"));
