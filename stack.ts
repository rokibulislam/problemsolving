interface IStack<T> {
    push(item: T): void;
    
    pop(): T | undefined;
    
    peek(): T | undefined;
    
    size(item: T): number;
}

class Stack<T> implements IStack<T> {

    private storage: T[] = [];

    constructor(private capacity: number = Infinity) {}
    
    push(item: T): void {
        if( this.size() === this.capacity) {
            throw Error("Stack has reached max capacity, you cannot add");
        }
        this.storage.push(item);
    }

    pop(): T | undefined {
        return this.storage.pop()
    }

    peek(): T | undefined {
        return this.storage[this.size() - 1 ];
    }

    size(): number {
        return this.storage.length;
    }
}

const stack= new Stack<string>();
stack.push("A");
stack.push("B");
stack.push("C");
stack.push("D");

console.log( stack.size() ); // Output: 4
console.log( stack.peek() ); // Output: "D"
console.log( stack.size() ); // Output: 4
console.log( stack.pop() );  // Output: "D"
console.log( stack.size() ); // Output: 3