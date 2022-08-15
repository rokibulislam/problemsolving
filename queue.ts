interface IQueue<T> {
    enqueue(item: T): void;
    dequeue(): T | undefined;
    size(): number;
}

class Queue<T> implements IQueue<T> {

    private storage: T[] = [];

    constructor(private capacity: number = Infinity) {}
    
    enqueue(item: T): void {
        if( this.size() === this.capacity) {
            throw Error("Queue has reached max capacity, you cannot add");
        }
        this.storage.push(item);
    }

    dequeue(): T | undefined {
        return this.storage.shift()
    }

    size(): number {
        return this.storage.length;
    }
}

const queue= new Queue<string>();
queue.enqueue("A");
queue.enqueue("B");
queue.enqueue("C");
queue.enqueue("D");

console.log( queue.size() ); // Output: 4
console.log( queue.dequeue() ); // Output: "D"
console.log( queue.size() ); // Output: 4
console.log( queue.dequeue() );  // Output: "D"
console.log( queue.size() ); // Output: 3