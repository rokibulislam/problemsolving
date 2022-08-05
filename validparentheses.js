function isValid(s) {
    var parentstack = [];
    var map = new Map([
        ['}', '{'],
        [']', '['],
        [')', '(']
    ]);
    var openingBraces = Array.from(map.keys());
    for (var i = 0; i < s.length; i++) {
        if (openingBraces.includes(s[i])) {
            var popVal = parentstack.pop();
            if (popVal !== map.get(s[i])) {
                return false;
            }
        }
        else {
            parentstack.push(s[i]);
        }
    }
    return parentstack.length === 0;
}
var s1 = "()";
var s2 = "()[]{}";
var s3 = "(]";
var s4 = "([)]";
var s5 = "{[]}";
console.log(isValid(s1));
console.log(isValid(s2));
console.log(isValid(s3));
console.log(isValid(s4));
console.log(isValid(s5));
