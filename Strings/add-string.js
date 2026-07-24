num1 = "9333852702227987"
num2 = "85731737104263"



var addStrings = function(num1, num2) {
    // console.log(Number(num1));
    // console.log(Number(num2));
    console.log(String(Number(num1)+ Number(num2)));
    console.log(String(BigInt(num1)+ BigInt(num2)));
};



addStrings(num1, num2)
