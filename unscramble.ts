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
var scrambled: string[] = ['_NtoA','RfromI','RtoO','IfromA','BtoI_','BfromO']
console.log("processing..")
Unscramble(scrambled)

function Unscramble( scrambled: string[]): string{
    let word : string[] = []
    let sanitized : string[] = []
    var temp : string = ''
    var reverse : string = ''

    // Sanitize scrambled
    for (let portion of scrambled){
        if ( portion.indexOf('to') != -1){
            temp = portion.replace('to', "")
        }
        if ( portion.indexOf('from') != -1){
            portion.replace('from', "")
            temp = portion.charAt(portion.length-1) + portion.charAt(0)
        }
        sanitized.push(temp)
    }
    // Find first and last and push to word
    for(let pair of sanitized){
        if (pair[0] == '_') {
            let first_pair: string = pair.substring(1)
            word.push(first_pair)
            var current : string = first_pair[1]
        }
        if (pair[pair.length-1] == '_') {
            let last_pair: string = pair.substring(0,2)
            word.push(last_pair)
            reverse = last_pair[0]
            var reverse_index : number = 0
        }
    }
    // loop through the rest
    var current_index : number = 1

    for (let element of sanitized) {
        
    }
    // loop through the rest reverse
    // for (let x = 0; x < sanitized.length; x++) {
    //     const element_reverse = sanitized[x];
    //     if (element_reverse[1] === reverse ) {
    //         word.splice(reverse_index, 0,  element_reverse[0])
    //     }
    //     reverse_index--
    // }
    console.dir(word)
    return 'word'
}