/**
 * 栈结构学习 FILO 先入后出
 */
class Stack {
  constructor() {
    this.items = {};
    this.count = 0;
  }

  push(element) {
    this.items[this.count++] = element;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }

    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.count - 1];
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }

  clear() {
    /**
     * 方式 1： 直接清空
     */
    this.count = 0;
    this.items = {};

    /**
     * 方式 2：while 循环清空
     */
    while (!this.isEmpty()) {
      this.pop();
    }
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }

    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString += `, ${this.items[i]}`;
    }

    return objString;
  }
}

const stack = new Stack();
console.log(stack.size());

stack.push(1);
console.log(stack, stack.peek());

stack.clear();
console.log(stack);

stack.push(1);
stack.push(2);

console.log(stack.pop(), stack.size());

console.log(stack.toString());
