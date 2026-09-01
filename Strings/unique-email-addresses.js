// emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"]

var numUniqueEmails = function(emails) {
    let result = new Set()
    let email = ''
    let plusState = false

    for (let i = 0; i < emails.length; i++) {
        for (let j = 0; j < emails[i].length; j++){
            if (emails[i][j] === '.'){
                continue
            } else if ( emails[i][j] === '@'){
                plusState = false
                email += emails[i].slice(j)
                break
            } else if ( emails[i][j] === '+' || plusState === true){
                plusState = true
            } else {
                email += emails[i][j]
            }
        }
        result.add(email)
        email = ''
    }

    return result.size
};

console.log(numUniqueEmails(emails));

// optimized approach
// var numUniqueEmails = function(emails) {
//     const set = new Set();

//     for (let email of emails) {
//         let [local, domain] = email.split("@");

//         local = local.split("+")[0];

//         local = local.replace(/\./g, "");

//         set.add(local + "@" + domain);
//     }

//     return set.size;
// };