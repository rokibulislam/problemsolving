"use strict";
exports.__esModule = true;
function productFromString(s_array) {
    //Insert your code here 
    var noVowels = s_array.map(function (x) { return x.replace(/[aeiou]/g, ''); })[0];
    var cnt1 = 0;
    var cnt2 = 0;
    var cnt3 = 0;
    var vowels = /[aeiou]/gi;
    cnt1 = s_array.map(function (x) { return x.split('').filter(function (letter) { return 'aeiou'.includes(letter); }).join(''); })[0].length;
    // console.log(cnt1)
    for (var i = 0; i < noVowels.length; i++) {
        if (convertLetterToNumber(noVowels[i]) % 2 == 0) {
            cnt2 += 1;
        }
        else if (convertLetterToNumber(noVowels[i]) % 2 == 1) {
            cnt3 += 1;
        }
    }
    return cnt1 * cnt2 * cnt3;
}
exports["default"] = productFromString;
function convertLetterToNumber(str) {
    str = str.toUpperCase();
    var out = 0, len = str.length;
    for (var pos = 0; pos < len; pos++) {
        out += (str.charCodeAt(pos) - 64) * Math.pow(26, len - pos - 1);
    }
    return out;
}
console.log(productFromString(["abc"]));
console.log(productFromString(["abcdefgh"]));
