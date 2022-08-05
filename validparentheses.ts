function isValid(s: string): boolean {
    const parentstack: any = [];
    const map = new Map([
        ['}', '{'],
        [']', '['],
        [')', '(']
    ])
    const openingBraces = Array.from(map.keys());

    for (let i = 0; i < s.length; i++) {
        if (openingBraces.includes(s[i])) {
            const popVal = parentstack.pop();
            if( popVal !==  map.get(s[i]) ) {
                return false;
            }
        } else {
            parentstack.push(s[i]);
        }
    }
    
    return parentstack.length === 0;
}

let s1 = "()"
let s2 = "()[]{}"
let s3 = "(]"
let s4 = "([)]"
let s5 = "{[]}"

console.log( isValid(s1) );
console.log( isValid(s2) );
console.log( isValid(s3) );
console.log( isValid(s4) );
console.log( isValid(s5) );