module.exports = findMultiples = (x, y, limit) => {
  // console.log(`findMultiples(x=${x}, y=${y}, limit=${limit})`);

  if (!Number.isInteger(x) || !Number.isInteger(y) || !Number.isInteger(limit))
    throw new Error("findMultiples(): Parameters must be natural numbers");

  // if (typeof x !== 'number' || typeof y !== 'number' || typeof limit !== 'number')
  //   throw new Error("findMultiples(): Invalid parameter type");

  if (x <= 0 || y <= 0 || limit <= 0)
    throw new Error("findMultiples(): Parameters must be natural numbers");



  let currNum = x < y ? x : y;
  const multiples = [];
  for (currNum; currNum < limit; currNum++) {
    // console.log(currNum);
    if (currNum % x === 0 || currNum % y === 0) {
      multiples.push(currNum);
    }
  }
  return multiples;
};