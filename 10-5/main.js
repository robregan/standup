// Hey @100Devs-MS, today's question:

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'


// Bonus: Can you do it without built in array methods? 

// From: https://www.codewars.com/kata/5168bb5dfe9a00b126000018/javascript

// See you at standup!

function reverse(str){
    let newStr = ''
    for(let i = str.length-1; i >= 0; i--){
        newStr += str[i]
    }return newStr
}

console.log(reverse('Heyo'), 'oyeH')
console.log(reverse('bambi'), 'ibmab')