// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){
    let initials = name.toUpperCase().split(' ')
    return `${initials[0][0]}.${initials[1][0]}`

}

// SUGGESTD ANSWER
// function abbrevName(name){
//     return name.split(' ').map(i => i[0].toUpperCase()).join('.')
// }