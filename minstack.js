var MinStack = /** @class */ (function () {
    function MinStack() {
        this.stack = [];
    }
    MinStack.prototype.push = function (val) {
        this.stack.push(val);
    };
    MinStack.prototype.pop = function () {
        this.stack.pop();
    };
    MinStack.prototype.top = function () {
        return this.stack[this.stack.length - 1];
    };
    MinStack.prototype.getMin = function () {
        return Math.min.apply(Math, this.stack);
    };
    return MinStack;
}());
var minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // return -3
minStack.pop();
console.log(minStack.top()); // return 0
console.log(minStack.getMin()); // return -2
