var Stack = /** @class */ (function () {
    function Stack(capacity) {
        if (capacity === void 0) { capacity = Infinity; }
        this.capacity = capacity;
        this.storage = [];
    }
    Stack.prototype.push = function (item) {
        if (this.size() === this.capacity) {
            throw Error("Stack has reached max capacity, you cannot add");
        }
        this.storage.push(item);
    };
    Stack.prototype.pop = function () {
        return this.storage.pop();
    };
    Stack.prototype.peek = function () {
        return this.storage[this.size() - 1];
    };
    Stack.prototype.size = function () {
        return this.storage.length;
    };
    return Stack;
}());
var stack = new Stack();
stack.push("A");
stack.push("B");
stack.push("C");
stack.push("D");
console.log(stack.size()); // Output: 2
console.log(stack.peek()); // Output: "B"
console.log(stack.size()); // Output: 2
console.log(stack.pop()); // Output: "B"
console.log(stack.size()); // Output: 1
