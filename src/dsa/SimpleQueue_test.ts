import { assertEquals } from "@std/assert";
import SimpleQueue from "@dsa/SimpleQueue.ts";

Deno.test("should enqueue 5 items", function () {
  const q = new SimpleQueue()
    .enqueue(2)
    .enqueue(4)
    .enqueue(3)
    .enqueue(6)
    .enqueue(2);

  assertEquals(q.size(), 5);
});

Deno.test("should dequeue 5 items", function () {
  const q = new SimpleQueue()
    .enqueue(2);

  q.dequeue();

  console.log("::|::", q.size());

  assertEquals(q.size(), 5);
});
