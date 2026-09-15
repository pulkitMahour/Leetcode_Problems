var gcdOfStrings = function(str1, str2) {
  function canBuild(pattern, target){
    let n = target.length/pattern.length
    return pattern.repeat(n) === target;
  }

  function getGCD(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  const a = getGCD(str1.length, str2.length)
  const pattern = str2.slice(0, a)

  const match = canBuild(pattern, str2)
  
  if (match){
    let m = str1.length/a;
    if (pattern.repeat(m) === str1){
      return pattern
    } else {
      return ""
    }
  } else {
    return ""
  }
};
