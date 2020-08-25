

//https://www.hackerrank.com/challenges/js10-switch/problem

function getLetter(s) {
    // let letter="abcdefghijklmnopqrstuvwxyz";
     // Write your code here
    // let input=s.split("");
   switch(true){
       case /^[aeiou]/.test(s):return "A";
       case /^[bcdfg]/.test(s):return "B";
       case /^[hjklm]/.test(s):return "C";
       default :return "D";
       //break; 
   }
 }