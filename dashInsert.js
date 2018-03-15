function dashInsert(num) {
    var result = '';
    var strNum = num.toString();
    for (var i = 1; i < strNum.length; i++) {
        var char  = strNum[i];
        var prev = strNum[i-1];
        if (char % 2 !== 0 && prev % 2 !== 0) {
            result += prev + "-"
        } else {
            result += prev;
        }
    }
    result += strNum[strNum.length - 1]
    return result;
}

var a = 454793
var b = 334457

console.log(dashInsert(a))
console.log(dashInsert(b))
