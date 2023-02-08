"use strict";

/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }

  /** sumValues(): add up all values of invoking node and its children.
   * Returns sum as an integer. */
  sumValues() {
    let sum = this.val;
    for (let int of this.children) {
      sum += int.val;
    }
    return sum;
  }
  // this.children.reduce((acc, curVal, i) => acc + this.curVal, this.val)

  /** countEvens(): starting from the invoking node and moving through its
   * children, count how many nodes have even values. Returns that count as
   * an integer. */
  countEvens() {
    let evens = (this.val % 2 === 0) ? 1 : 0;
    for (let even of this.children) {
      if (even % 2 === 0) evens++;
    }
    return evens;
  }

  /** numGreater(lowerBound): starting from the invoking node and moving through
   * its children, return a count of the number of nodes whose value is greater
   * than lowerBound. */
  numGreater(lowerBound) {
    let count = (this.val > lowerBound) ? 1 : 0;
    for (let child of this.children) {
      if (child > lowerBound) count++;
    }
    return count;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all values in the tree. */
  sumValues() {}

  /** countEvens(): count all nodes in the tree that have even values. */
  countEvens() {}

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */
  numGreater(lowerBound) {}
}

module.exports = { Tree, TreeNode };
