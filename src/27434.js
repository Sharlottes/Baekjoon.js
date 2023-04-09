const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", (line) => {
  console.log(factorial(+line).toString());
  rl.close();
});

function factorial(number) {
  const heap = new PriorityQueue();
  for (let i = 0; i <= number; i++) heap.enqueue(BigInt(i == 0 ? 1 : i));
  while (heap.heap.length > 1) {
    heap.enqueue(heap.dequeue().data * heap.dequeue().data);
  }
  return heap.dequeue().data;
}

class Heap {
  /** @type Array<{ data: number; }> */
  heap = [];

  getLeftChildIndex = (parentIndex) => parentIndex * 2 + 1;
  getRightChildIndex = (parentIndex) => parentIndex * 2 + 2;
  getParentIndex = (childIndex) => Math.floor((childIndex - 1) / 2);

  peek = () => this.heap[0];

  insert(data) {
    const node = { data };
    this.heap.push(node);
    this.heapifyUp();
  }

  remove() {
    const count = this.heap.length;
    const rootNode = this.peek();

    if (count <= 0) return undefined;
    if (count === 1) this.heap = [];
    else {
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
    }

    return rootNode;
  }

  heapifyUp() {
    let currentIndex = this.heap.length - 1;
    const lastInsertedNode = this.heap[currentIndex];

    while (currentIndex > 0) {
      const parentIndex = this.getParentIndex(currentIndex);

      if (this.heap[parentIndex].data > lastInsertedNode.data) {
        this.heap[currentIndex] = this.heap[parentIndex];
        currentIndex = parentIndex;
      } else break;
    }

    this.heap[currentIndex] = lastInsertedNode;
  }

  heapifyDown() {
    let index = 0;
    const count = this.heap.length;
    const rootNode = this.peek();

    while (this.getLeftChildIndex(index) < count) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);
      const smallerChildIndex =
        rightChildIndex < count &&
        this.heap[rightChildIndex].data < this.heap[leftChildIndex].data
          ? rightChildIndex
          : leftChildIndex;

      if (this.heap[smallerChildIndex].data <= rootNode.data) {
        this.heap[index] = this.heap[smallerChildIndex];
        index = smallerChildIndex;
      } else break;
    }

    this.heap[index] = rootNode;
  }
}

class PriorityQueue extends Heap {
  enqueue = (value) => this.insert(value);
  dequeue = () => this.remove();
  isEmpty = () => this.heap.length <= 0;
}
