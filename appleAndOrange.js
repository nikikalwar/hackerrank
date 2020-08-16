//https://www.hackerrank.com/challenges/apple-and-orange/problem

'use strict';

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

// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let applesDistance=apples.map((arr)=>{
        return a+arr;
    })
    let orangeDistance=oranges.map((arr)=>{
        return b+arr;
    })
    let counter1=0;
    let counter2=0;
    let i;
    for(i=0;i<applesDistance.length;i++){
        if(applesDistance[i]>=s &&applesDistance[i]<=t)
        counter1++;
    }
for(i=0;i<orangeDistance.length;i++){
        if(orangeDistance[i]>=s &&orangeDistance[i]<=t)
        counter2++;
    }
    
   // console.log(applesDistance);
 //   console.log(orangeDistance);
     console.log(counter1);
     console.log(counter2);

}

function main() {
    const st = readLine().split(' ');

    const s = parseInt(st[0], 10);

    const t = parseInt(st[1], 10);

    const ab = readLine().split(' ');

    const a = parseInt(ab[0], 10);

    const b = parseInt(ab[1], 10);

    const mn = readLine().split(' ');

    const m = parseInt(mn[0], 10);

    const n = parseInt(mn[1], 10);

    const apples = readLine().split(' ').map(applesTemp => parseInt(applesTemp, 10));

    const oranges = readLine().split(' ').map(orangesTemp => parseInt(orangesTemp, 10));

    countApplesAndOranges(s, t, a, b, apples, oranges);
}
