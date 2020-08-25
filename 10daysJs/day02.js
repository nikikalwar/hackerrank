//https://www.hackerrank.com/challenges/js10-loops/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

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

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let input=s.split("");
    //console.log(input);
    let arr1="";
    let arr2="";
    let i=0;
    input.forEach(s1=>{
        if((s1=='a')||(s1=='e')||(s1=='o')||(s1=='i')||(s1=='u')){
        arr1+=s1;
        }
        else arr2+=s1;
    })
    arr1.split("").forEach(char=>console.log(char));
    arr2.split("").forEach(char=>console.log(char));
  // console.log(arr1);
    
}

