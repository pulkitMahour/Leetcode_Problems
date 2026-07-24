
// arr = [37,12,28,9,100,56,80,5,12]
// arr = [40,10,20,30]
arr = [100,100,100]



var arrayRankTransform = function(arr) {
    let rank = 1
    let marking = {}
    let arr_copy = [... arr]
    let answer = []
    for(let i of new Set(arr_copy.sort((a,b) => a - b))){
        marking[i] = rank
        rank++
    }

    for (let j of arr){
        answer.push(marking[j])
    }
    console.log(answer);
};


arrayRankTransform(arr)

// optimized approach

var arrayRankTransform = function(arr) {
    const sortedUnique = Array.from(new Set(arr)).sort((a, b) => a - b);
    const marking = new Map();
    sortedUnique.forEach((num, idx) => marking.set(num, idx + 1));
    return arr.map(num => marking.get(num));
};