s = "Let's take LeetCode contest"


var reverseWords = function (s) {
    let arr = s.split(" ");
    let rev = ''
    for (let i in arr) {
        for (let j of arr[i]) {
            rev = j + rev
        }
        arr[i] = rev;
        rev = ''
    }
    console.log(arr.join(" "));
};


reverseWords(s)


// var reverseWords = function (s) {
//     let arr = s.split('');
//     arr.push(' ')
//     let rev = ''
//     let answer = ''
//     for (let i in arr) {
//         if (arr[i] != " ") {
//             rev = arr[i] + rev
//         } else {
//             if ((arr.length - 1) != i) {
//                 answer += rev + " ";
//             } else {
//                 answer += rev
//             }
//             rev = ''
//         }
//     }
//     console.log(answer);
// };