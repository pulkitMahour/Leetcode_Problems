// s = "5F3Z-2e-9a-w", k = 4;
// s = "2-5g-3-J", k = 2;
s = "--a-a-a-a--", k = 2;


var licenseKeyFormatting = function(s, k) {
    let format = ''
    let group = ''
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] != '-'){
            format = s[i].toUpperCase() + format;
            group = s[i].toUpperCase() + group;
            if (group.length == k && i != 0){
                format = '-' + format
                group = ''
            }
        }
    }
    if (format[0] == '-'){
        format = format.slice(1)
    }
    console.log(format);
};



licenseKeyFormatting(s, k)