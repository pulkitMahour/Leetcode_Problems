s1 = "this apple is sweet", s2 = "this apple is sour"

var uncommonFromSentences = function (s1, s2) {
    newarray = [...s1.split(' '), ...s2.split(' ')]

    let i = 0;
    let j = 1;
    let common = false;
    while (i < newarray.length) {
        while (j < newarray.length) {
            if (newarray[i] === newarray[j]) {
                newarray.splice(j, 1)
                common = true
            } else {
                j++
            }
        }
        if (!common) {
            i++
        } else {
            newarray.splice(i, 1)
            common = false
        }
        j = i + 1;
    }

    return newarray
};


//optimized approach

// var uncommonFromSentences = function (s1, s2) {
//     const words = [...s1.split(' '), ...s2.split(' ')];
//     const counts = {};

//     for (const word of words) {
//         counts[word] = (counts[word] || 0) + 1;
//     }

//     return Object.keys(counts).filter(word => counts[word] === 1);
// };