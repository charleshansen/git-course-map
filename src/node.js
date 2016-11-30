import React from "react";

class Node {
  constructor(name, children = []) {
    this.name = name
    this.children = children
  }

  get deepNumberOfChildren() {
    return this.children.length + this.children.reduce((a, b) => a + b.deepNumberOfChildren, 0)
  }
}

export default (name = 'default name', children = []) => new Node(name, children)