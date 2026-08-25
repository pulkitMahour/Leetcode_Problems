// nums = [8, 2, 3, 4, 6], k = 2
// nums = [1,4,7,10,15], k = 5
nums = [83,96,34,56,48,30,7,14,77,66,66,66,21,17,38,7,9], k = 7

var missingMultiple = function (nums, k) {
    let filtered_array = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % k === 0) {
            filtered_array.push(nums[i])
        }
    }
    filtered_array.sort((a, b) => a - b);
    const uniqueSorted = [...new Set(filtered_array)].sort((a, b) => a - b);

    let multiple = 1;
    for (let i of uniqueSorted) {
        if (i === k * multiple) {
            multiple++
        } else {
            return k * multiple
        }
    }
    return k * multiple
};

console.log(missingMultiple(nums, k))


//optimized approach
// var missingMultiple = function(nums, k) {
//     const numSet = new Set(nums);
//     let multiple = 1;
    
//     while (numSet.has(k * multiple)) {
//         multiple++;
//     }
    
//     return k * multiple;
// };