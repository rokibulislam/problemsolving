class MinStack {
    private stack: number[] = [];

    push(val: number): void {
        this.stack.push(val);
    }

    pop(): void {
        this.stack.pop()
    }
    
    top(): number {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        return Math.min(...this.stack);
    }
}


let minStack = new MinStack()
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // return -3
minStack.pop();
console.log(minStack.top());    // return 0
console.log(minStack.getMin()); // return -2