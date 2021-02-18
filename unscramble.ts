/**
 * Unscrambles data to derive original word
 * 
 * @param array of scrambled data
 * @return string of meaningful word of decoded data
 */
// set current to last value of first portion
// loop through remaining searching for one beginning with current
// in loop push last of found to word and set current to last of found
// Now half of pattern is solved time to traverse backwards
// set current to first of last portion
// loop through searching for portion ending with the new current
// check the remaining portion if the portions are similar swap and push
let scrambled: string[] = ['']
function Unscramble( scrambled: string[]): string{
    // Initialized variables
    let intermediate:string[] = []
    let sanitized:string[] = []
    let current:string[] = []
    let first:string = ''
    let last:string = ''
    let temp:string = ''
    // remove to and from and sanitized
    scrambled.forEach(x => {
        if ( x.indexOf('to') != -1 && x.length === 4) {
            temp = x[0] + x[x.length-1]
            sanitized.push(temp)
        } else {
            temp = x[x.length-1] + x[0]
            sanitized
        }
    });
    console.dir(sanitized)
    // first and last
    // for (const portion of scrambled) {
    //     if (portion.charAt(0) == '_') {
    //         first = portion
    //         // push to word
    //         intermediate = Array(first) 
    //     }
    //     if (portion.charAt(-1) == '_') {
    //         last = portion
    //     }
    // }

    // Find first portion and last portion push to word


    return 'String'
}