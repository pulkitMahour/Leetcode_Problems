// s = "PAYPALISHIRING", numRows = 4;
s = "AB", numRows = 1

var convert = function (s, numRows) {
    let arr = [];
    let count = numRows - 1;
    let loop = true;
    if (numRows == 1) {
        return s;
    } else {
        for (let i = 0; i < s.length; i++) {
            if (i < numRows) {
                arr.push(Array.from(s[i]))
            } else if (loop) {
                arr[count - 1].push(s[i]);
                count--;
                if (count == 0) {
                    loop = false
                }
            } else if (!loop) {
                arr[count + 1].push(s[i]);
                count++;
                if (count == numRows - 1) {
                    loop = true
                }
            }
        }
    }
    return arr.flat(Infinity).join('');
};

console.log(convert(s, numRows));