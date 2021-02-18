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
var scrambled = ['_NtoA', 'RfromI', 'RtoO', 'IfromA', 'BtoI_', 'BfromO'];
console.log("processing..");
Unscramble(scrambled);
function Unscramble(scrambled) {
    var word = [];
    var sanitized = [];
    var temp = '';
    var reverse = '';
    // Sanitize scrambled
    for (var _i = 0, scrambled_1 = scrambled; _i < scrambled_1.length; _i++) {
        var portion = scrambled_1[_i];
        if (portion.indexOf('to') != -1) {
            temp = portion.replace('to', "");
        }
        if (portion.indexOf('from') != -1) {
            portion.replace('from', "");
            temp = portion.charAt(portion.length - 1) + portion.charAt(0);
        }
        sanitized.push(temp);
    }
    // Find first and last and push to word
    for (var _a = 0, sanitized_1 = sanitized; _a < sanitized_1.length; _a++) {
        var pair = sanitized_1[_a];
        if (pair[0] == '_') {
            var first_pair = pair.substring(1);
            word.push(first_pair);
            var current = first_pair[1];
        }
        if (pair[pair.length - 1] == '_') {
            var last_pair = pair.substring(0, 2);
            word.push(last_pair);
            reverse = last_pair[0];
            var reverse_index = 0;
        }
    }
    // loop through the rest
    var current_index = 1;
    for (var _b = 0, sanitized_2 = sanitized; _b < sanitized_2.length; _b++) {
        var element = sanitized_2[_b];
        console.log(element[0] + " " + current);
        if (element[0] == current) {
            word.splice(current_index, 0, element[1]);
        }
        current = element[1];
        current_index++;
    }
    // loop through the rest reverse
    // for (let x = 0; x < sanitized.length; x++) {
    //     const element_reverse = sanitized[x];
    //     if (element_reverse[1] === reverse ) {
    //         word.splice(reverse_index, 0,  element_reverse[0])
    //     }
    //     reverse_index--
    // }
    console.dir(word);
    return 'word';
}
