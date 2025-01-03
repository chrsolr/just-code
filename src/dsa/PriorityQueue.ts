type Options = {
  limit?: number
}

type Item = {
  item: unknown
  priority: number
}

export default class PriorityQueue {
  private limit: number = 10
  private items: Item[] = []

  constructor({ limit }: Options = {}) {
    this.limit = limit ?? 10
  }

  enqueue(item?: Item): PriorityQueue {
    if (!item) {
      console.warn(`Trying to enqueue a falsy item: ${item}`)
      return this
    }

    if (this.size() >= this.limit) {
      console.warn(`Max limit of ${this.limit} reached.`)
      return this
    }

    if (this.isEmpty()) {
      this.items.push(item)
      return this
    }

    for (let i = 0; i < this.items.length; i++) {
      const currentItem = this.items[i]

      if (item.priority <= currentItem.priority) {
        this.items.splice(i, 0, item)
        break
      }

      if (i === this.items.length - 1) {
        this.items.push(item)
        break
      }
    }

    return this
  }

  dequeue(): PriorityQueue {
    if (this.isEmpty()) {
      return this
    }

    this.items.shift()

    return this
  }

  getItems(): Item[] {
    return this.items
  }

  size(): number {
    return this.items?.length ?? 0
  }

  clear(): PriorityQueue {
    this.items = []
    return this
  }

  isEmpty(): boolean {
    return this.items?.length <= 0
  }

  peek(): Item | null {
    if (!this.isEmpty()) {
      return this.items[0]
    }

    return null
  }
}

// deno-lint-ignore require-await
export async function run(ms: number = 1000): Promise<void> {
  console.info('Priority Queue Started!!')

  let interval: number | null = null

  return new Promise((resolve, reject) => {
    try {
      const unorderedItems = [
        { item: 'Internal', priority: 2 },
        { item: 'Set', priority: 3 },
        { item: 'Without', priority: 2 },
        { item: '!!', priority: 4 },
        { item: 'Queue', priority: 2 },
        { item: 'Priority', priority: 1 },
        { item: 'Interval', priority: 3 },
        { item: 'My', priority: 1 },
      ]

      const q = new PriorityQueue()

      unorderedItems.forEach((item) => q.enqueue(item))

      console.info('Unordered items:', unorderedItems)
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
