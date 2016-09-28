const expect = require('chai').expect;
const LinkedList = require('./linked-list');

describe("LinkedList", () => {
  let list;

  beforeEach(() => {
    list = new LinkedList();
  });

  it("should define an add function", () => {
    expect(list.add).to.be.a('function');
  });

  it("should define an insert function", () => {
    expect(list.insert).to.be.a('function');
  });

  it("should define a remove function", () => {
    expect(list.remove).to.be.a('function');
  });

  it("should define a toArray function", () => {
    expect(list.toArray).to.be.a('function');
  });

  it("should add to the tail of the list and not change the head", () => {
    list.add(1);
    expect(list.head.value).to.equal(1);
    expect(list.tail.value).to.equal(1);

    list.add(2);
    expect(list.head.value).to.equal(1);
    expect(list.tail.value).to.equal(2);

    list.add(3);
    expect(list.head.value).to.equal(1);
    expect(list.tail.value).to.equal(3);
  });

  it("should increase size when item is added", () => {
    expect(list.size).to.equal(0);

    list.add(3);
    expect(list.size).to.equal(1);

    list.add(5);
    expect(list.size).to.equal(2);
  });

  it("should insert at the head when passed index 0 and not change the tail", () => {
    list.add(1);
    expect(list.head.value).to.equal(1);
    expect(list.tail.value).to.equal(1);

    list.insert(2, 0);
    expect(list.head.value).to.equal(2);
    expect(list.tail.value).to.equal(1);

    list.insert(3, 0);
    expect(list.head.value).to.equal(3);
    expect(list.tail.value).to.equal(1);
  });

  it("should insert at the head when passed negative index and not change the tail", () => {
    list.add(1);
    expect(list.head.value).to.equal(1);
    expect(list.tail.value).to.equal(1);

    list.insert(2, -12);
    expect(list.head.value).to.equal(2);
    expect(list.tail.value).to.equal(1);

    list.insert(3, -1);
    expect(list.head.value).to.equal(3);
    expect(list.tail.value).to.equal(1);
  });

  it("should insert at the tail when passed size as index and not change the head", () => {
    list.add(1);
    expect(list.head.value).to.equal(1);
    expect(list.tail.value).to.equal(1);

    list.insert(2, list.size);
    expect(list.head.value).to.equal(1);
    expect(list.tail.value).to.equal(2);

    list.insert(3, list.size);
    expect(list.head.value).to.equal(1);
    expect(list.tail.value).to.equal(3);
  });

  it("should insert at the tail when passed greater than the size index and not change the head", () => {
    list.add(1);
    expect(list.head.value).to.equal(1);
    expect(list.tail.value).to.equal(1);

    list.insert(2, list.size + 10);
    expect(list.head.value).to.equal(1);
    expect(list.tail.value).to.equal(2);

    list.insert(3, list.size + 20);
    expect(list.head.value).to.equal(1);
    expect(list.tail.value).to.equal(3);
  });

  it("should increase size when item is inserted", () => {
    expect(list.size).to.equal(0);

    list.insert(3, 0);
    expect(list.size).to.equal(1);

    list.insert(5, 1);
    expect(list.size).to.equal(2);
  });

  it("should have correct representation as an array", () => {
    list.add(1);
    list.add(3);
    list.add(5);
    expect(list.toArray()).to.deep.equal([1, 3, 5]);

    list.insert(2, 0);
    expect(list.toArray()).to.deep.equal([2, 1, 3, 5]);

    list.add(42);
    expect(list.toArray()).to.deep.equal([2, 1, 3, 5, 42]);

    list.insert(66, list.size);
    expect(list.toArray()).to.deep.equal([2, 1, 3, 5, 42, 66]);
  });

  it("should insert between head and tail with index greater than 0 and smaller than size", () => {
    list.add(1);
    list.add(3);
    list.add(5);
    expect(list.toArray()).to.deep.equal([1, 3, 5]);

    list.insert(2, 1);
    expect(list.toArray()).to.deep.equal([1, 2, 3, 5]);


    list.insert(4, 3);
    expect(list.toArray()).to.deep.equal([1, 2, 3, 4, 5]);
  });

  it("should decrease size on remove", () => {
    list.add(3);
    list.add(5);
    list.add(8);
    expect(list.size).to.equal(3);

    list.remove(0);
    expect(list.size).to.equal(2);

    list.remove(0);
    expect(list.size).to.equal(1);

    list.remove(0);
    expect(list.size).to.equal(0);

    list.remove(0);
    expect(list.size).to.equal(0);
  });

  it("should remove the head when passing index 0 or less", () => {
    list.add(3);
    list.add(5);
    list.add(8);
    expect(list.head.value).to.equal(3);
    expect(list.size).to.equal(3);

    list.remove(0);
    expect(list.head.value).to.equal(5);
    expect(list.size).to.equal(2);

    list.remove(-1);
    expect(list.head.value).to.equal(8);
    expect(list.size).to.equal(1);

    list.remove(-42);
    expect(list.head).to.be.null;
    expect(list.size).to.equal(0);

    list.remove(0);
    expect(list.head).to.be.null;
    expect(list.size).to.equal(0);
  });

  it("should remove the tail when passing index equal to the size or greater", () => {
    list.add(3);
    list.add(5);
    list.add(8);
    expect(list.tail.value).to.equal(8);
    expect(list.size).to.equal(3);

    list.remove(list.size);
    expect(list.tail.value).to.equal(5);
    expect(list.size).to.equal(2);

    list.remove(list.size + 2);
    expect(list.tail.value).to.equal(3);
    expect(list.size).to.equal(1);

    list.remove(42);
    expect(list.tail).to.be.null;
    expect(list.size).to.equal(0);

    list.remove(list.size);
    expect(list.tail).to.be.null;
    expect(list.size).to.equal(0);
  });

  it("should remove between head and tail with index greater than 0 and smaller than size", () => {
    list.add(3);
    list.add(1);
    list.add(5);
    list.add(7);
    list.add(8);
    expect(list.toArray()).to.deep.equal([3, 1, 5, 7, 8]);

    list.remove(2);
    expect(list.toArray()).to.deep.equal([3, 1, 7, 8]);

    list.remove(2);
    expect(list.toArray()).to.deep.equal([3, 1, 8]);

    list.remove(1);
    expect(list.toArray()).to.deep.equal([3, 8]);

    list.remove(1);
    expect(list.toArray()).to.deep.equal([3]);

    list.remove(1);
    expect(list.toArray()).to.deep.equal([]);
  });
});
