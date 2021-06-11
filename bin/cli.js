#!/usr/bin/env node

const pkg = require('../package.json')
const program = require('commander')
const {
    printFoundMultiples
} = require('../index')


function commaSeparatedList(value, dummyPrevious) {
    const tokens = value.split(',')
    return tokens.map((token) => {
        return Number(token).valueOf()
    })
}

try {

    program.version(pkg.version)
        .arguments('<input_file> <output_file>')
        .usage("<input_file> <output_file>")
        .action((input_file, output_file) => {
            // console.log(`input: ${input_file}, output: ${output_file}`);
            printFoundMultiples(input_file, output_file);
        })
        .parse(process.argv);

} catch (err) {
    console.log(err)
}




