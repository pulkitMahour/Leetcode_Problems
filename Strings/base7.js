// num = 100
// num = 99
num = -7


var convertToBase7 = function(num) {
    let quotient = num < 0 ? -num : num;
    let remainder = '';

    if(num == 0){
        return '0'
    }

    while (quotient != 0) {
        remainder = quotient%7 + remainder
        quotient = Math.floor(quotient/7);
        console.log(quotient%7, quotient);
    }
    console.log(num < 0 ? remainder = '-'+ remainder : remainder);
};


convertToBase7(num)

