interface QueueObj {
    [propName: number]: any;
}
export default class Queue {
    // javascript 高级写法
    private count: number;
    private lowestCount: number;
    private items: QueueObj;

    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    dequeue() {
        //先进先出 FIFO
        if(this.isEmpty()){
            return undefined
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }
    enqueue(item: any) {
        this.items[this.count] = item;
        this.count++;
    }
    //返回队首元素
    peek() {
        if(this.isEmpty()) {
            return undefined
        }
        return this.items[this.lowestCount]
    }
    size() {
        return this.count - this.lowestCount
    }
    clear() {
        this.count = 0;
        this.items = {};
    }
    isEmpty() {
        return this.count - this.lowestCount == 0
    }
    toString() {
        if (this.isEmpty()) {
            return ""
        }
        let objString = `${this.items[this.lowestCount]}`
        for(let i=this.lowestCount; i<this.count; i++){
            objString = `${objString}, ${this.items[i]}`
        }
        return objString
    }
}