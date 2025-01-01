type Options = {
  limit?: number;
};

export default class SimpleQueue {
  private limit: number = 10;
  private items: unknown[] = [];

  constructor({ limit }: Options = {}) {
    this.limit = limit ?? 10;
  }

  enqueue(item: unknown) {
    if (!item) {
      return this;
    }

    if (this.items.length >= this.limit) {
      return this;
    }

    this.items.push(item);

    return this;
  }

  dequeue() {
    if (this.isEmpty()) {
      return this;
    }

    this.items.shift();

    return this;
  }

  getItems() {
    return this.items ?? [];
  }

  size() {
    return this.items.length ?? 0;
  }

  clear() {
    this.items = [];
    return this;
  }

  isEmpty() {
    return !(this.items?.length <= 0);
  }

  peek() {
    if (this.items.length > 0) {
      return this.items[0];
    }

    return null;
  }
}

// deno-lint-ignore require-await
export async function run(ms: number = 1000): Promise<void> {
  console.info("Simple Queue Started!!");

  let interval: number | null = null;

  return new Promise((resolve, reject) => {
    try {
      const q = new SimpleQueue()
        .enqueue("My")
        .enqueue("Simple")
        .enqueue("Queue")
        .enqueue("Without")
        .enqueue("Internal")
        .enqueue("Set")
        .enqueue("Interval")
        .enqueue("!!");

      console.info("Initial items:", q.getItems());

      interval = setInterval(() => {
        q.dequeue();

        console.info("Items:", q.getItems());

        if (q.isEmpty() && interval !== null) {
          clearInterval(interval);
          resolve();
        }
      }, ms);
    } catch (error) {
      console.error(error);
      reject();
    }
  });
}
