function replaceSmiley(input) {
  return input.replaceAll(':)', ':(');
}


let input = ":) :) :) All smiles here :)";
console.log(replaceSmiley(input));