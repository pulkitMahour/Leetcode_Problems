n = 15

var fizzBuzz = function(n) {
    let i = 1;
    let answer = [];
    while (i < (n+1)){
        if (i % 3 === 0 && i % 5 === 0){
            answer.push('FizzBuzz')
        } else if (i % 3 === 0){
            answer.push('Fizz')
        } else if (i % 5 === 0){
            answer.push('Buzz')
        } else {
            answer.push(i.toString())
        }
        i++;
    }
    console.log(answer);
};

fizzBuzz(n)