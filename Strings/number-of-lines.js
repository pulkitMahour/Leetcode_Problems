let widths = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
let s = "abcdefghijklmnopqrstuvwxyz"
// let widths = [4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
// let s = "bbbcccdddaaa"

var numberOfLines = function (widths, s) {
    count = 0
    lines = 1
    for (const letter of s) {
        letter_index = letter.charCodeAt(0) - 97;
        if (count + widths[letter_index] <= 100) {
            count += widths[letter_index]
        } else {
            lines += 1;
            count = widths[letter_index];
        }
    }
    return [lines, count]
};

console.log(numberOfLines(widths, s))