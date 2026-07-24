// list1 = ["happy","sad","good"], list2 = ["sad","happy","good"]
// list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Shogun","Hungry Hunter Steakhouse"]
list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"]

var findRestaurant = function(list1, list2) {
    let obj = {}
    let j = 0;
    for (let i = 0; i < list1.length; i++){
        j = 0
        while (j < list2.length) {
            console.log(i, j);
            if (list1[i] === list2[j]){
                if (obj[i+j]){
                    obj[i+j].push(list1[i])
                } else {
                    obj[i+j] = [list1[i]]
                }
                list2.splice(j, 1)
                // console.log(list2);
            } else {j++}
        }
    }
    console.log(obj[Math.min(...Object.keys(obj))]);

};

findRestaurant(list1, list2)



// var findRestaurant1 = function(list1, list2) {
//     let obj = {}
//     for (let i = 0; i < list1.length; i++){
//         for (let j = 0; j < list2.length; j++){
//             console.log(i, j);
//             if (list1[i] === list2[j]){
//                 if (obj[i+j]){
//                     obj[i+j].push(list1[i])
//                 } else {
//                     obj[i+j] = [list1[i]]
//                 }
                
//             }
//         }
//     }
//     console.log(obj[Math.min(...Object.keys(obj))]);

// };

// findRestaurant1(list1, list2)