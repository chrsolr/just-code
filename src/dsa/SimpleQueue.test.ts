import { assertEquals, assertFalse } from '@std/assert'
import SimpleQueue from '@dsa/SimpleQueue.ts'

Deno.test('Simple queue should enqueue 5 items', () => {
  const q = new SimpleQueue()
    .enqueue(2)
    .enqueue(4)
    .enqueue(3)
    .enqueue(6)
    .enqueue(2)

  assertEquals(q.size(), 5)
})

Deno.test('Simple queue should dequeue 5 items', () => {
  const q = new SimpleQueue()
    .enqueue(2)
    .enqueue(4)
    .enqueue(3)
    .enqueue(6)
    .enqueue(2)
    .dequeue()
    .dequeue()
    .dequeue()

  assertEquals(q.size(), 2)
})

Deno.test('Simple queue should not be empty', () => {
  const q = new SimpleQueue().enqueue(5).enqueue(3)
  assertFalse(q.isEmpty())
})

Deno.test('Simple queue should be empty after clear', () => {
  const q = new SimpleQueue().enqueue(5).enqueue(3).clear()
  assertFalse(!q.isEmpty())
})

Deno.test('Simple queue should display 4 after Peek', () => {
  const q = new SimpleQueue()
    .enqueue(6)
    .enqueue(7)
    .enqueue(4)
    .enqueue(30)
    .dequeue()
    .dequeue()
  assertEquals(q.peek(), 4)
})

Deno.test('Simple queue should have max items of 5', () => {
  const q = new SimpleQueue({ limit: 5 })
    .enqueue(6)
    .enqueue(7)
    .enqueue(4)
    .enqueue(30)
    .enqueue(6)
    .enqueue(7)
    .enqueue(4)
    .enqueue(30)
    .enqueue(6)
    .enqueue(7)
    .enqueue(4)
    .enqueue(30)

  assertEquals(q.size(), 5)
})
