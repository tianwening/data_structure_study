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

module.exports = {
  Queue,
};

/**
 * 应用：击鼓传花游戏
 */

function hotPotato(elementsList, num) {
  const queue = new Queue();
  const eliminatedList = [];

  for (let i = 0; i < elementsList.length; i++) {
    queue.enqueue(elementsList[i]);
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    eliminatedList.push(queue.dequeue());
  }

  return {
    eliminated: eliminatedList,
    winner: queue.dequeue(),
  };
}
const names = ["John", "Jack", "Camila", "Ibgrid", "carl"];

const result = hotPotato(names, 7);
result.eliminated.forEach((name) => {
  console.log(`${name}在击鼓传花游戏中被淘汰出局`);
});
console.log(`胜利者：${result.winner}`);
