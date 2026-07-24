s = "abcdefg", k = 2
// s = "abcd", k = 2


// var reverseStr = function (s, k) {
//     let sub = ''
//     let rev = ''
//     let answer = ''
//     for (let i = 1; i <= s.length; i++) {
//         if (s.length - (i - 1) == k) {
//             answer = answer + s.slice(s.length - (s.length - answer.length))
//             return answer
//         } else if (i % k == 0) {
//             sub += s[i - 1];
//             for (let j = (sub.length - 1); j >= 0; j--) {
//                 rev += sub[j]
//             }
//             answer += rev;
//             sub = '';
//             rev = '';
//         } else {
//             sub += s[i - 1]
//         }
//     }

//     if (s.length != answer.length) {
//         answer = answer + s.slice(s.length - (s.length - answer.length))
//     }
//     return answer;
// };


// console.log(reverseStr(s, k));

var reverseStr = function(s, k) {
    let arr = s.split('');
    for (let i = 0; i < arr.length; i += 2 * k) {
        let left = i;
        let right = Math.min(i + k - 1, arr.length - 1);
        console.log(`left: ${left}, right: ${right}`);
        // Reverse the first k characters in current 2k block
        while (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }
    console.log(arr);
    return arr.join('');
};

console.log(reverseStr(s, k));
