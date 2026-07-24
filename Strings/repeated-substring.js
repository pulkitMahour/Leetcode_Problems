
s = "abaaba"


// var repeatedSubstringPattern = function(s) {
//     let str1 = s[0]
//     let str2 = "" 
//     for (let i = 1; i < s.length; i++) {
//         if (s[i] !== s[0]){
//             str1 += s[i];
//         } else {
//             str2 = str1
//             str1 = s[i]
//         }
//         console.log(`str1: ${str1}, str2: ${str2}, i: ${i}`);     
//     }
//     if (str1 === str2){
//         return true
//     } else {
//         return false
//     }
// };


// console.log(repeatedSubstringPattern(s));


var repeatedSubstringPattern = function(s) {
    let n = s.length;
    for (let len = 1; len <= n / 2; len++) {
        if (n % len === 0) {
            let sub = s.slice(0, len);
            if (sub.repeat(n / len) === s) {
                return true;
            }
        }
    }
    return false;
};