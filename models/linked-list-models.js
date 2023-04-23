class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class DoublyNode extends Node {
  constructor(element, next, prev) {
    super(element, next);
    this.prev = prev;
  }
}

module.exports = {
  Node,
  DoublyNode,
};
