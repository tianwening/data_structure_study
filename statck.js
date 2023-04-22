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

/**
 * 应用：进制转换
 */
function decimalToBinary(number) {
  const stack = new Stack();
  let rem;

  while (number > 0) {
    rem = Math.floor(number % 2);
    stack.push(rem);
    number = Math.floor(number / 2);
  }

  let result = "";
  while (!stack.isEmpty()) {
    result += stack.pop();
  }

  return result;
}

function baseConvert(desNumber, base) {
  const remStack = new Stack();
  const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  if (!(base >= 2 && base <= 36)) {
    return "";
  }

  while (desNumber > 0) {
    let rem = Math.floor(desNumber % base);
    remStack.push(digits[rem]);
    desNumber = Math.floor(desNumber / base);
  }

  let result = "";
  while (!remStack.isEmpty()) {
    result += remStack.pop();
  }

  return result;
}
