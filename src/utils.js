const fs = require("fs");
const path = require("path");

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
        const parsedRows = [];
        const rows = fs.readFileSync(path.resolve(filename), 'utf-8').toString().split("\n");
        rows.forEach((row) => {
            const parsedRow = [...row.split(' ').map((numStr) => Number.parseInt(numStr))];
            parsedRows.push(parsedRow);
        })
        return parsedRows;
    } catch (err) {
        throw err
    }
}

const writeToFile = (filename, multiplesArr) => {
    try {
        const writeStream = fs.createWriteStream(path.resolve(filename));
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