// address = "1.1.1.1"
address = "255.100.50.0"

var defangIPaddr = function(address) {
    let answer = '';
    for (let i of address){
        if(i === '.'){
            answer += '[.]'
        } else {
            answer += i
        }
    }
    return answer
};

var defangIPaddr = function(address) {
    let splitArray = address.split('.');
    let answer = splitArray.join('[.]');
    return answer
};

console.log(defangIPaddr(address));