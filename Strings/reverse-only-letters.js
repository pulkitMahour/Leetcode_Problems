// s = "a-bC-dEf-ghIj"
s = "Test1ng-Leet=code-Q!"

// var reverseOnlyLetters = function(s) {
//     let letters = [];
//     for (let i = 0; i < s.length; i++) {
//         if (s[i].toLowerCase() !== s[i].toUpperCase()) {
//             letters.push(s[i]);
//         }
//     }

//     let answer = '';

//     for (let i = 0; i < s.length; i++) {
//         if (s[i].toLowerCase() !== s[i].toUpperCase()) {
//             answer += letters.pop();
//         } else {
//             answer += s[i];
//         }
//     }

//     return answer;
// };

// Two pointers approach
var reverseOnlyLetters = function (s) {
    let arr = s.split('');
    let left = 0;
    let right = arr.length - 1;

    const isLetter = (char) => {
        return char.toLowerCase() !== char.toUpperCase();
    };

    while (left < right) {
        if (!isLetter(arr[left])) {
            left++;
        } else if (!isLetter(arr[right])) {
            right--;
        } else {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;

            left++;
            right--;
        }
    }

    return arr.join('');
}

console.log(reverseOnlyLetters(s));