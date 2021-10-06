// Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

// E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

// Note: You can expect all of the inputs to be the same length.



// Hint: Remember how we grabbed individual letters from the string in yesterday's problem when not using the methods. Loop through a string and grab the letters from all to add to a new string. 

// From: https://www.codewars.com/kata/5704aea738428f4d30000914/javascript


function tripleTrouble(one, two, three){
    let newStr = ''
    for(let i = 0; i < one.length; i++){
      newStr += one[i] + two[i] + three[i]
    }return newStr
  }
  
  
      console.log(tripleTrouble("aaa","bbb","ccc"), "abcabcabc");
      console.log(tripleTrouble("aaaaaa","bbbbbb","cccccc"), "abcabcabcabcabcabc");
      console.log(tripleTrouble("burn", "reds", "roll"), "brrueordlnsl");
      console.log(tripleTrouble("Sea","urn","pms"), "Supermans"); 
      console.log(tripleTrouble("LLh","euo","xtr"), "LexLuthor");
 