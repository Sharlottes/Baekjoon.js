const rl = require("readline").createInterface(process.stdin, process.stdout);
rl.on("line", (line) => {
  console.log(factorialByMinHeapWithOptionalBigInt(+line).toString());
  rl.close();
});

function factorialByMinHeapWithOptionalBigInt(number) {
  const heap = new MinHeap();
  for (let i = 0; i <= number; i++) heap.insert(i);
  while (heap.heap.length > 1) {
    const a = heap.remove();
    const b = heap.remove();
    const res =
      a < Number.MAX_SAFE_INTEGER && b < Number.MAX_SAFE_INTEGER
        ? a * b
        : BigInt(a) * BigInt(b);
    heap.insert(res < Number.MAX_SAFE_INTEGER ? res : BigInt(res));
  }
  return heap.remove();
}
class MinHeap {
  /** @type Array<{ data: number }> */
  heap = [];

  getLeftChildIndex = (parentIndex) => parentIndex * 2 + 1;
  getRightChildIndex = (parentIndex) => parentIndex * 2 + 2;
  getParentIndex = (childIndex) => Math.floor((childIndex - 1) / 2);

  peek = () => this.heap[0];

  insert = (data) => {
    const node = { data };
    this.heap.push(node);
    this.heapifyUp();
  };

  heapifyUp = () => {
    let index = this.heap.length - 1;
    const lastInsertedNode = this.heap[index];
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);
      if (this.heap[parentIndex].data > lastInsertedNode.data) {
        this.heap[index] = this.heap[parentIndex];
        index = parentIndex;
      } else break;
    }
    this.heap[index] = lastInsertedNode;
  };

  remove = () => {
    const count = this.heap.length;
    const rootNode = this.heap[0];
    if (count <= 0) return undefined;
    if (count === 1) this.heap = [];
    else {
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
    }

    return rootNode.data;
  };
  heapifyDown = () => {
    let index = 0;
    const count = this.heap.length;
    const rootNode = this.heap[index];
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
  };
}
