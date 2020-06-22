// This is an input class. Do not edit.
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

// Feel free to add new properties and methods to the class.
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // O(1) time / O(1) space
  setHead(node) {
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.insertBefore(this.head, node);
  }

  // O(1) time / O(1) space
  setTail(node) {
    if (this.tail === null) {
      this.setHead(node);
      return;
    }
    this.insertAfter(this.tail, node);
  }

  // O(1) time / O(1) space
  insertBefore(node, nodeToInsert) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) {
      return;
    }
    // want to remove node, if it is in our list, we need to remove
    // it and if it's not, its a no-op.
    this.remove(nodeToInsert);

    // we want to now update the bindings for its new adjacent nodes.
    nodeToInsert.prev = node.prev;

    // this is because we are passing in the node want to insert it
    // before so it will just point to it.
    nodeToInsert.next = node;

    if (node.prev === null) {
      this.head = nodeToInsert;
    } else {
      node.prev.next = nodeToInsert;
    }
    node.prev = nodeToInsert;
  }

  // O(1) time / O(1) space
  insertAfter(node, nodeToInsert) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) {
      return;
    }
    this.remove(nodeToInsert);
    nodeToInsert.prev = node;
    nodeToInsert.next = node.next;
    if (node.next === null) {
      this.tail = nodeToInsert;
    } else {
      node.next.prev = nodeToInsert;
    }
    node.next = nodeToInsert;
  }

  // O(p) time / O(1) space
  insertAtPosition(position, nodeToInsert) {
    if (position === 1) {
      this.setHead(nodeToInsert);
      return;
    }
    node = this.head;
    let currentPosition = 1;
    while (node !== null && currentPosition != position) {
      node = node.next;
      currentPosition += 1;
    }
    if (node !== null) {
      this.insertBefore(node, nodeToInsert);
    } else {
      this.setTail(nodeToInsert);
    }
  }

  // O(N) time / O(1) space
  // remember that we need to set temporary values to keep track of our nodes
  // this is becuase multiple nodes can be the same value
  removeNodesWithValue(value) {
    let node = this.head;
    while (node !== null) {
      // this line is important. You need to set a temporary variable for the node
      // you are checking or you will lose track of which node you are on
      // because you will have removed the .next value from node.
      let nodeToBeRemoved = node;
      node = node.next;
      if (nodeToBeRemoved.value === value) {
        this.remove(nodeToBeRemoved);
      }
    }
  }

  removeSingleNodeWithValue(value) {
    console.log("remove function", value);
    let node = this.head;

    while (node !== null) {
      // this line is important. You need to set a temporary variable for the node
      // you are checking or you will lose track of which node you are on
      // because you will have removed the .next value from node.
      let nodeToBeRemoved = node;
      node = node.next;
      if (nodeToBeRemoved.value === value) {
        this.remove(nodeToBeRemoved);
        return;
      }
    }
  }

  // O(1) time / O(1) space
  remove(node) {
    if (node === this.head) {
      this.head = this.head.next;
    }
    if (node === this.tail) {
      this.tail = this.tail.prev;
    }
    this.updateNodePointers(node);
  }

  // O(N) time / O(1) space
  containsNodeWithValue(value) {
    let node = this.head;
    while (node !== null && node.value !== value) {
      console.log(node.value);
      node = node.next;
    }
    return node !== null;
  }

  removeDups() {
    let dupsObj = {};
    let node = this.head;
    while (node !== null) {
      if (dupsObj[node.value]) {
        dupsObj[node.value] += 1;
      } else {
        dupsObj[node.value] = 1;
      }
      node = node.next;
    }
    for (let [value, count] of Object.entries(dupsObj)) {
      //   console.log(key);
      if (count === 2) {
        this.removeSingleNodeWithValue(value);
      }
    }
  }

  // This will update the pointers of the given nodes and
  // remove pointers of given nodes.
  // We have to update surrounding nodes before we can
  // remove the pointers of given node. We also want to
  // check if this is a head or tail now.
  // This needs to be in correct order, or you will lose track
  // of place in linked list.
  updateNodePointers(node) {
    //this is checking if node will now become head node
    if (node.prev !== null) {
      node.prev.next = node.next;
    }
    //this is checking if node will now become tail node
    if (node.next !== null) {
      node.next.prev = node.prev;
    }
    node.prev = null;
    node.next = null;
  }
}

let node1 = new Node("1");
let node2 = new Node("2");
let node3 = new Node("3");
let node4 = new Node("4");
let node5 = new Node("4");
let node6 = new Node("3");

let linkedList = new DoublyLinkedList();
linkedList.setHead(node1);
linkedList.insertAfter(node1, node2);
linkedList.insertBefore(node2, node6);
linkedList.insertAfter(node1, node3);
linkedList.insertAfter(node1, node4);
linkedList.insertAfter(node3, node5);

linkedList.removeDups();
linkedList.containsNodeWithValue("555");
