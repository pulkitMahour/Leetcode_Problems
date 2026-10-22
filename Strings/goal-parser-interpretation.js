command = "G()(al)"
// command = "G()()()()(al)"
// command = "(al)G(al)()()G"

var interpret = function (command) {
    let result = ""
    for (let i = 1; i < command.length; i++) {
        if (`${command[i - 1]}${command[i]}` === '()') {
            result += 'o'
        } else if (command[i - 1] !== '(' && command[i - 1] !== ')') {
            result += command[i - 1]
        }
    }

    if (command[command.length - 1] !== '(' && command[command.length - 1] !== ')') {
        result += command[command.length - 1]
    }

    return result
};

// refactored approach
// var interpret = function (command) {
//     return command.replaceAll('()', 'o').replaceAll('(al)', 'al');
// };

console.log(interpret(command));