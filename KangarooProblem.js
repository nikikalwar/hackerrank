'use strict';
//https://www.hackerrank.com/challenges/kangaroo/problem?h_r=next-challenge&h_v=zen&isFullScreen=true
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

// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {
let sum1=x1;
let sum2=x2;
let counter1=1;
let counter2=1;
if(x1>x2 && v1>v2) return "NO";
else if(x2>x1 && v2>v1) return "NO";
else if(x1<x2 &&v1>v2 ||x2<x1 && v2>v1 )  {
    while(counter1==counter2){
         sum1=sum1+v1;
            sum2=sum2+v2;
            counter1++;
            counter2++;
         if(sum1==sum2)
        { 
            if(counter1==counter2){
            return "YES";
            counter1=-1;
            }
            else return "NO";
        }
        if(sum1>sum2 && v1>v2) return "NO";
        if(sum2>sum1 && v2>v1) return "NO";
        }
        }
else return "NO";
       // else if(counter1=-1) return "NO";
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const x1V1X2V2 = readLine().split(' ');

    const x1 = parseInt(x1V1X2V2[0], 10);

    const v1 = parseInt(x1V1X2V2[1], 10);

    const x2 = parseInt(x1V1X2V2[2], 10);

    const v2 = parseInt(x1V1X2V2[3], 10);

    let result = kangaroo(x1, v1, x2, v2);

    ws.write(result + "\n");

    ws.end();
}
