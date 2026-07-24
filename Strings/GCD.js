n = 4
n = 5


var gcdOfOddEvenSums = function (n) {
    let even = 0;
    let odd = 0;
    for (let index = 1; index <= (n * 2); index++) {
        if (index%2 == 0){
            even += index;
        } else {
            odd += index;
        }
    }
    console.log(even - odd);
};


gcdOfOddEvenSums(n)