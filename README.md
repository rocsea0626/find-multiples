# Find multiples of given x, y within limit
This program takes a file as the 1st command line argument. The file content is list of numbers, with 3 numbers per row separated by space and number of rows is undefined (can be something between 1 - infinite). 1st number in a row is X and the 2nd is Y, 3rd is the goal number. The program searches all multiples of X and Y which are below the third number, print it out to screen and also write results to file which was given as the second command line argument.

## Installation

- from zip file
```shell
unzip find-multiples.zip
```
- from github
```shell
git clone https://github.com/rocsea0626/find-multiples.git
```


## Quick Start
- Create a symlink in the global folder 
```shell
cd find-multiples
npm install
npm link
```

## Usage

Help menu
```shell
find-multiples -h
```

Command line
```shell
find-multiples <input_file> <output_file>
```

## Unit test

```shell
npm test
```

## Folder Structure
- ```__test__/``` unit test files
- ```bin/``` contains .js file to enable project to be used as command line program
- ```index.js``` entry point of project


## Concerns
Currently, all rows in input file are read into memory at once. Since, the number of rows in `input` file may be `Infinete`, current `file_read` approach may not work if size of `input` file is too big. However, because the `output` needs to be sorted all input has to be read into memory at once.

Ideally for large amount of data. `input` file can be splitted into smaller pieces and sorted locally then `merge_sort` again, but this may become very complicated to implement within allowed time frame.

## Instructions
Code exam.

You have three (3) hours to complete this exam. Choose one from the attached three exercises and solve it with any programming language you choose. Submit all relevant material in zip/tar file format over email. Remember to attach instructions or any other appropriate documentation.

Think of the code exam as a complete piece of software, not just a one-liner to solve the particular problem at hand.