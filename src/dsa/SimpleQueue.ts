type Options = {
  limit?: number
}

type Item = unknown

export default class SimpleQueue {
  private limit: number = 10
  private items: Item[] = []

  constructor({ limit }: Options = {}) {
    this.limit = limit ?? 10
  }

  enqueue(item: Item): SimpleQueue {
    if (!item) {
      return this
    }

    if (this.items.length >= this.limit) {
      return this
    }

    this.items.push(item)

    return this
  }

  dequeue(): SimpleQueue {
    if (this.isEmpty()) {
      return this
    }

    this.items.shift()

    return this
  }

  getItems(): Item[] {
    return this.items ?? []
  }

  size(): number {
    return this.items.length ?? 0
  }

  clear(): SimpleQueue {
    this.items = []
    return this
  }

  isEmpty(): boolean {
    return this.items?.length <= 0
  }

  peek(): Item | null {
    if (this.items.length > 0) {
      return this.items[0]
    }

    return null
  }
}

// deno-lint-ignore require-await
export async function run(ms: number = 1000): Promise<void> {
  console.info('Simple Queue Started!!')

  let interval: number | null = null

  return new Promise((resolve, reject) => {
    try {
      const q = new SimpleQueue()
        .enqueue('My')
        .enqueue('Simple')
        .enqueue('Queue')
        .enqueue('Without')
        .enqueue('Internal')
        .enqueue('Set')
        .enqueue('Interval')
        .enqueue('!!')

      console.info('Initial items:', q.getItems())

      interval = setInterval(() => {
        q.dequeue()

        console.info('Items:', q.getItems())

        if (q.isEmpty() && interval !== null) {
          clearInterval(interval)
          resolve()
        }
      }, ms)
    } catch (error) {
      console.error(error)
      reject()
    }
  })
}
