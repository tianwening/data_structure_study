const { defaultEquals, defaultCompare, Compare } = require("./utils");
const { LinkedList } = require("./linkedList");

/**
 * 有序列表
 */
class SortedLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
    super(equalsFn);
    this.compareFn = compareFn;
  }

  insert(element, index = 0) {
    if (this.isEmpty()) {
      return super.insert(element, 0);
    } else {
      const pos = this.getIndexNextSortedElement(element);
      return super.insert(element, pos);
    }
  }

  getIndexNextSortedElement(element) {
    let current = this.head;
    let i = 0;
    for (; i < this.size() && current; i++) {
      const comp = this.compareFn(element, current.element);
      if (comp === Compare.LESS_THAN) {
        return i;
      }
      current = current.next;
    }
    return i;
  }
}

module.exports = {
  SortedLinkedList,
};
