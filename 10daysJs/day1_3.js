//https://www.hackerrank.com/challenges/js10-let-and-const/problem

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    let rad=readLine();
    //console.log(rad);
    const PI=Math.PI;
    //console.log(PI);
    // Print the area of the circle:
    let area=PI*rad*rad;
    console.log(area);
    // Print the perimeter of the circle:
    let perimeter=2*PI*rad;
    console.log(perimeter);
    try {    