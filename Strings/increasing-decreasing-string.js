s = "aaaabbbbcccc"

var sortString = function (s) {
    const tempObj = {};
    for (let char of s) {
        tempObj[char] = (tempObj[char] || 0) + 1;
    }

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    const totalLength = s.length;

    while (result.length < totalLength) {
        for (let i = 0; i < 26; i++) {
            const char = alphabet[i];
            if (tempObj[char] > 0) {
                result += char;
                tempObj[char]--;
            }
        }

        for (let i = 25; i >= 0; i--) {
            const char = alphabet[i];
            if (tempObj[char] > 0) {
                result += char;
                tempObj[char]--;
            }
        }
    }

    return result;
};

console.log(sortString(s));