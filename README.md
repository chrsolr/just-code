# Just Code

## Queue's

<details open>
<summary>Simple Queue</summary>
<br>
A simple queue is a linear data structure that follows the First In,
First Out (FIFO) principle, meaning the first element added to the queue
will be the first one to be removed.
When implementing a simple queue, it should at least support
the following basic operations:

1. Enqueue (Insert)
Adds an element to the end of the queue.

2. Dequeue (Remove)
Removes and returns the element at the front of the queue.

3. Peek/Front (View)
Returns the element at the front of the queue without removing it.

4. Is Empty (Check if empty)
Returns True if the queue is empty, otherwise returns False.

5. Size (Size of the queue)
Returns the number of elements in the queue.
</details>


<details open>
<summary>Prioriyt Queue</summary>
<br>

A **Priority Queue** is a special type of queue where each element is associated with a 
**priority**. Elements with higher priority are dequeued before those with lower priority, 
regardless of the order they were inserted. It is similar to a regular queue, but the difference 
lies in how elements are prioritized when dequeued.

## Key Characteristics
1. **Priority-based Dequeuing**: Unlike a standard queue where elements are dequeued in a 
   First In First Out (FIFO) order, in a priority queue, elements with the highest priority 
   are dequeued first.
2. **Heap Data Structure**: A priority queue is often implemented using a binary heap, 
   where the root element is the highest (or lowest) priority.
3. **Priority Values**: Each element in the priority queue is typically associated with a 
   **priority value**. This priority value can be an integer or another comparable type, 
   and it determines the order of processing.

## Types of Priority Queues
1. **Max-priority queue**: In this queue, the element with the highest priority is 
   dequeued first.
2. **Min-priority queue**: In this queue, the element with the lowest priority is 
   dequeued first.

## Operations
1. **Insert**: Add a new element with a priority to the queue.
2. **Peek/Front**: View the element with the highest priority without removing it.
3. **Remove/Dequeue**: Remove and return the element with the highest priority 
   from the queue.
4. **IsEmpty**: Check whether the priority queue is empty.
5. **Change Priority**: Sometimes, the priority of an element can be updated.

</details>
