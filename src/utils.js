const fs = require("fs")
const path = require("path")
const findMultiples = require("./findMultiples")

/**
 * Read from input file and parse its content into 2 dimensional array
 * Sample input:
 * 3 5 31
 * 2 7 26
 * 
 * Sample output:
 * [
 *  [3 5 31],
 *  [2 7 26]
 * ]
 * @param {String} filename
 * @return {Array} 2 dimensional array of x, y, limit
 */
const parseInputFile = (filename) => {
    try {
        const result = [];
        const rows = fs.readFileSync(path.resolve(__dirname, filename), 'utf-8').toString().split("\n");
        // console.log(rows);
        rows.forEach((row) => {
            // console.log(row);
            const rowNums = [...row.split(' ').map((numStr) => Number.parseInt(numStr))];
            // console.log(rowNums);
            result.push(rowNums);
        })
        return result;
    } catch (err) {
        throw err
    }
}

const writeToFile = (filename, multiplesArr) => {
    try {
        const writeStream = fs.createWriteStream(path.resolve(__dirname, filename));
        multiplesArr.forEach((multiples) => {
            writeStream.write(multiples + '\n');
        })
        writeStream.end();
    } catch (err) {
        throw err
    }
}

/**
 * Format multiples output
 * @param multiples
 * @param limit
 */
const formatMultiples = (multiples, limit) => {
    return `${limit}: ${multiples.join(' ')}`;
}


module.exports = {
    parseInputFile,
    writeToFile,
    formatMultiples
}