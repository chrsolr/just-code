import { assertEquals, assertFalse } from '@std/assert'
import PriorityQueue from '@dsa/PriorityQueue.ts'

Deno.test('Priority queue should enqueue 5 items', () => {
  const q = new PriorityQueue()
    .enqueue({ item: 3, priority: 3 })
    .enqueue({ item: 4, priority: 4 })
    .enqueue({ item: 1, priority: 1 })
    .enqueue({ item: 3, priority: 3 })
    .enqueue({ item: 2, priority: 2 })

  assertEquals(q.size(), 5)
})

Deno.test('Priority queue should dequeue 5 items', () => {
  const q = new PriorityQueue()
    .enqueue({ item: 3, priority: 3 })
    .enqueue({ item: 4, priority: 4 })
    .enqueue({ item: 1, priority: 1 })
    .enqueue({ item: 3, priority: 3 })
    .enqueue({ item: 2, priority: 2 })
    .dequeue()
    .dequeue()
    .dequeue()

  assertEquals(q.size(), 2)
})

Deno.test('Priority queue should not be empty', () => {
  const q = new PriorityQueue()
    .enqueue({ item: 3, priority: 3 })
    .enqueue({ item: 4, priority: 4 })
  assertFalse(q.isEmpty())
})

Deno.test('Priority queue should be empty after clear', () => {
  const q = new PriorityQueue()
    .enqueue({ item: 3, priority: 3 })
    .enqueue({ item: 4, priority: 4 })
    .clear()
  assertFalse(!q.isEmpty())
})

Deno.test('Priority queue should display 4 after Peek', () => {
  const q = new PriorityQueue()
    .enqueue({ item: 6, priority: 3 })
    .enqueue({ item: 7, priority: 4 })
    .dequeue()
    .enqueue({ item: 4, priority: 1 })
    .enqueue({ item: 3, priority: 3 })

  assertEquals(q.peek()?.item, 4)
})

Deno.test('Priority queue should have max items of 5', () => {
  const q = new PriorityQueue({ limit: 5 })
    .enqueue({ item: 3, priority: 3 })
    .enqueue({ item: 4, priority: 4 })
    .enqueue({ item: 1, priority: 1 })
    .enqueue({ item: 3, priority: 3 })
    .enqueue({ item: 2, priority: 2 })
    .enqueue({ item: 3, priority: 3 })
    .enqueue({ item: 4, priority: 4 })
    .enqueue({ item: 1, priority: 1 })
    .enqueue({ item: 3, priority: 3 })
    .enqueue({ item: 2, priority: 2 })

  assertEquals(q.size(), 5)
})

Deno.test('Priority queue should be in correct order', () => {
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

  assertEquals(
    q
      .getItems()
      .map((item) => item.item)
      .join(' '),
    'My Priority Queue Without Internal Interval Set !!',
  )
})
