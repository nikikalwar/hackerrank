'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the beautifulBinaryString function below.
function beautifulBinaryString(b) {
let input=b.split("");
let n=input.length;
let index=0;
let counter=0;
while(index<n-1){
    if(input[index]==0 &&input[index+1]==1 &&input[index+2]==0){
    counter++;
    index=index+3;
    }
    else index++;
}
return counter;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const b = readLine();

    let result = beautifulBinaryString(b);

    ws.write(result + "\n");

    ws.end();
}
