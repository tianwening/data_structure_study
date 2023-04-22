/**
 * 双端队列
 */
class DeQueue {
  constructor() {
    this.items = {};
    this.count = this.lowestCount = 0;
  }

  addFront(element) {
    /**
     * 分3种情况
     */
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.items[--this.lowestCount] = element;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.lowestCount = 0;
      this.items[this.lowestCount] = element;
    }
  }

  addBack(element) {
    this.items[this.count++] = element;
  }

  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.count - 1];
    delete this.items[this.count - 1];
    this.count--;
    return result;
  }

  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  peekBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  size() {
    return this.count - this.lowestCount;
  }

  isEmpty() {
    return this.count - this.lowestCount === 0;
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

/**
 * 应用：回文检查
 */

function palindromeChecker(testString) {
  if (typeof testString !== "string" || testString.length === 0) {
    return false;
  }

  const deQueue = new DeQueue();
  const str = testString.toLocaleLowerCase().split(" ").join("");
  for (let i = 0; i < str.length; i++) {
    deQueue.addBack(str.charAt(i));
  }

  let isEqual = true;
  while (deQueue.size() > 1 && isEqual) {
    const frontStr = deQueue.removeFront();
    const backStr = deQueue.removeBack();
    if (frontStr !== backStr) {
      isEqual = false;
    }
  }

  return isEqual;
}
