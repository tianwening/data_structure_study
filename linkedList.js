const { defaultEquals } = require("./utils");
const { Node } = require("./models/linked-list-models");

/**
 * 链表学习
 */
class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = null;
    this.equalsFn = equalsFn;
  }

  push(element) {
    const node = new Node(element);
    let current;
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }

  insert(element, position) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      if (index === 0) {
        const current = this.head;
        node.next = current;
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1);
        const current = previous.next;
        previous.next = node;
        node.next = current;
      }
      this.count++;
      return true;
    }

    return false;
  }

  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let node = this.head;
      for (let i = 0; i < index && node !== null; i++) {
        node = node.next;
      }
      return node;
    }
    return undefined;
  }

  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.count && current !== null; i++) {
      if (this.equalsFn(element, current.element)) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        this.head = current.next;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }

    return undefined;
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.count;
  }

  getHead() {
    return this.head;
  }

  clear() {
    this.count = 0;
    this.head = null;
  }

  toString() {
    if (this.head === null) {
      return "";
    }

    let objString = `${this.head.element}`;
    let current = this.head.next;
    for (let i = 0; i < this.count && current !== null; i++) {
      objString += `,${current.element}`;
      current = current.next;
    }

    return objString;
  }
}

module.exports = {
  LinkedList,
};

const linkedList = new LinkedList();
console.log(linkedList.isEmpty());
linkedList.push("张三");
linkedList.push("李四");

console.log(linkedList);

linkedList.removeAt(1);
console.log(linkedList);

console.log(linkedList.isEmpty());
