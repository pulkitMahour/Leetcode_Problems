s = "Hello, my name is John"
// s = ' '


var countSegments = function(s) {
    s = s + ' '
    let x = [];
    let str = ''
    for (const i of s){
        if (i !== ' '){
            str += i;
        } else if (i === ' ' && str){
            x.push(str);
            str = ''
        }
        // console.log(i);
    }
    console.log(x, x.length);
};


countSegments(s)

