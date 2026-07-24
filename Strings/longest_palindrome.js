s = "abccccdd";
// s = 'aaabbccc';
// s = 'asaa';
// s = 'xxaaabbbcccddddd'
// s = 'ccc';
// s="civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"

// var longestPalindrome = function (s) {
//     let dict = {}
//     let len = 0
//     let largestKey = ''
//     let oddSum = 0
//     let oddSumValues = 0

//     if (s.length == 1) {
//         return 1
//     } else {
//         for (let index = 0; index < s.length; index++) {
//             if (s[index] in dict) {
//                 dict[s[index]] += 1;
//                 if (dict[s[index]] > len) {
//                     len = dict[s[index]]
//                     largestKey = s[index]
//                 }
//             } else {
//                 dict[s[index]] = 1
//                 if (dict[s[index]] > len) {
//                     len = dict[s[index]]
//                     largestKey = s[index]
//                 }
//             }
//         }

//         for (const [key, value] of Object.entries(dict)) {
//             if (dict[largestKey] % 2 === 0 && value == 1){
//                 len += 1;
//                 // delete dict[key]
//                 break
//             }
//         }

//         console.log(dict, len);
//         for (const [key, value] of Object.entries(dict)) {
//             if (value % 2 !== 0 && value > 1) { // Check if the number is odd
//                 oddSum += 1;
//                 if (key == largestKey){
//                     delete dict[largestKey]
//                 } else {
//                     oddSumValues += value-1;
//                 }
//             } else if (value % 2 === 0) {
//                 if (key == largestKey){
//                     delete dict[largestKey]
//                 } else {
//                     len += value;
//                 }
//             }
//         }
//         if (oddSum % 2 !== 0) {
//             len += oddSumValues;
//         }
//         console.log(`Object: ${JSON.stringify(dict)}, \nlength: ${len}, \nOddSum: ${oddSum}, \nOddSumValues: ${oddSumValues}`);
//         return len
//     }
// };

var longestPalindrome = function (s) {
    let counts = {};
    for (const ch of s) {
        counts[ch] = (counts[ch] || 0) + 1;
    }

    let len = 0;
    let hasOdd = false;
    for (const key in counts) {
        len += counts[key] - (counts[key] % 2); // add the largest even part of this count
        if (counts[key] % 2 !== 0) {
            hasOdd = true; // at least one char can serve as the center
        }
    }

    if (hasOdd) {
        len += 1; // place a single odd character in the middle
    }

    return len;
};

longestPalindrome(s);




