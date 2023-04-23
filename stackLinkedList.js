const { DoublyLinkedList } = require("./doublyLinkedList");

/**
 * 使用双向链表模拟堆栈
 */
class StackLinkedList {
  constructor() {
    this.items = new DoublyLinkedList();
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.removeAt(this.size() - 1);
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.getElementAt(this.size() - 1).element;
  }

  isEmpty() {
    return this.items.isEmpty();
  }

  size() {
    return this.items.size();
  }

  clear() {
    return this.items.clear();
  }

  toString() {
    return this.items.toString();
  }
}

module.exports = {
  StackLinkedList,
};
