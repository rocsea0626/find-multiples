const findMultiples = require('./src/findMultiples');
const utils = require('./src/utils');

const printFoundMultiples = (inputFile, outputFile) => {

  const parsedInput = utils.parseInputFile(inputFile);
  // console.log(parsedInput);
  const multiplesArr = [];
  parsedInput.forEach((inputRow) => {
    const [x, y, limit] = inputRow;
    const multiples = findMultiples(x, y, limit);
    const formated = utils.formatMultiples(multiples, limit);
    multiplesArr.push(formated);
  })
  multiplesArr.sort((row1, row2) => row1.length - row2.length)
  multiplesArr.forEach((multiples) => console.log(multiples))
  // console.log(multiplesArr);

  utils.writeToFile(outputFile, multiplesArr);
}

module.exports = {
  findMultiples,
  printFoundMultiples
}