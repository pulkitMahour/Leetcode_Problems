// num = 3284
// num = 0
// num = 26
num = -1

var toHex = function(num) {
    const hex_val = {10: 'a', 11: 'b', 12: 'c', 13: 'd', 14: 'e', 15: 'f'}
    let answer = ''

    if (num == 0){
        answer = '0'
    } else {
        if (num < 0){
            num = num + 4294967296
        }
        while (num != 0){
            let rem = num % 16
            if (rem in hex_val){
                answer = hex_val[rem] + answer
            } else {
                answer = rem + answer
            }
            num = Math.floor(num/16)
        }
    }
    console.log(` num: ${num}, \n answer: ${answer}`);
};



toHex(num)



