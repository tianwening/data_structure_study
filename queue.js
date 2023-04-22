/**
 * 队列的学习 FIFO
 */
class Queue {
  constructor() {
    this.items = {};
    this.count = this.lowestCount = 0;
  }

  enqueue(element) {
    this.items[this.count++] = element;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount++];
    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  size() {
    return this.count - this.lowestCount;
  }

  isEmpty() {
    return this.count - this.lowestCount === 0;
  }

  clear() {
    this.items = {};
    this.count = this.lowestCount = 0;
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }

    let objString = `${this.items[this.lowestCount]}`;

    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString += `,${this.items[i]}`;
    }

    return objString;
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);

console.log(queue.toString());
