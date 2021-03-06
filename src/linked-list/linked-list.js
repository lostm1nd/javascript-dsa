const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  add(value) {
    return this._insertAtEnd(new Node(value));
  }

  insert(value, index) {
    let node = new Node(value);

    if (index <= 0) {
      return this._insertAtStart(node);
    }

    if (index === undefined || index >= this.size) {
      return this._insertAtEnd(node);
    }

    return this._insertAtIndex(node, index);
  }

  remove(index) {
    if (this.size === 0) {
      return this.size;
    }

    if (this.size === 1) {
      return this._removeAll();
    }

    if (index <= 0) {
      return this._removeAtStart();
    }

    if (index === undefined || index >= this.size) {
      return this._removeAtEnd();
    }

    return this._removeAtIndex(index);
  }

  toArray() {
    let result = [];
    let node = this.head;

    while (node) {
      result.push(node.value);
      node = node.next;
    }

    return result;
  }

  toReversedArray() {
    let reversed = [];

    this._createReversedArray(this.head, reversed);

    return reversed;
  }

  reverse() {
    let prev = null;
    let current = this.head;
    let next = null;

    this.tail = current;

    while (current) {
      next = current.next;
      current.next = prev;

      prev = current;
      current = next;
    }

    this.head = prev;
    return this;
  }

  reverseRecursive() {
    this.tail = this._reverseListRecursive(this.head);

    return this;
  }

  _insertAtStart(node) {
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    return this.size++;
  }

  _insertAtIndex(node, index) {
    let count = 0;
    let prevNode = this.head;

    while (count < index - 1) {
      prevNode = prevNode.next;
      count++;
    }

    node.next = prevNode.next;
    prevNode.next = node;
    return this.size++;
  }

  _insertAtEnd(node) {
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    return this.size++;
  }

  _removeAll() {
    this.head = null;
    this.tail = null;
    return this.size--;
  }

  _removeAtStart() {
    this.head = this.head.next;
    return this.size--;
  }

  _removeAtEnd() {
    let previous = null;
    let last = this.head;

    while (last.next) {
      previous = last;
      last = last.next;
    }

    previous.next = null;
    this.tail = previous;
    return this.size--;
  }

  _removeAtIndex(index) {
    let previous = null;
    let toRemove = this.head;

    while(index > 0) {
      previous = toRemove;
      toRemove = toRemove.next;
      index--;
    }

    previous.next = toRemove.next;
    toRemove = null;
    return this.size--;
  }

  _createReversedArray(node, array) {
    if (!node) {
      return;
    }

    this._createReversedArray(node.next, array);
    array.push(node.value);
  }

  _reverseListRecursive(node) {
    if (!(node && node.next)) {
      this.head = node;
      return node;
    }

    let current = this._reverseListRecursive(node.next);

    current.next = node;
    node.next = null;

    return node;
  }
}

module.exports = LinkedList;
