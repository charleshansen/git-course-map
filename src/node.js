import React from 'react'

import Square from './components/svg/Square'

class Node {
  constructor(name, children = []) {
    this.name = name
    this.children = children
  }

  get deepNumberOfChildren() {
    return this.children.length + this.children.reduce((a, b) => a + b.deepNumberOfChildren, 0)
  }

  // pre-order - https://en.wikipedia.org/wiki/Tree_traversal
  paintOnSvg(xOffset = 0, yOffset = 0) {
    const y = 25 * yOffset

    return (
      <g key={Math.random()} transform={`translate(${xOffset === 0 ? 0 : 25},${y})`}>
        <Square size="15"/>
        <text x="20" y="12.5">{this.name}</text>
        {Node.childrenHorizontalLine(this)}
        {Node.childrenVerticalLines(this.children)}
        {Node.childrenBlocks(this.children, xOffset)}
      </g>
    )
  }

  static childrenHorizontalLine(node) {
    if (node.children.length === 0) return

    // Doesn't include children under last
    const numChildrenBetweenFirstAndLast = node.deepNumberOfChildren - node.children[node.children.length - 1].deepNumberOfChildren;
    const height = numChildrenBetweenFirstAndLast * 25 + 12.5

    return <line key={Math.random()} x1="7.5" y1="15" x2="7.5" y2={height} style={{stroke: 'black', strokeWidth: '10'}}/>
  }

  static childrenVerticalLines(children) {
    let numberPreviousHiddenChildren = 0 // By 'hidden' we mean children of the children we're mapping over
    return children
      .map((child, currentChildCount) => {
        const height = 7.5 + (1 + currentChildCount + numberPreviousHiddenChildren) * 25
        const childPainting = <line key={Math.random()} x1="7.5" y1={height} x2="30" y2={height} style={{stroke: 'black', strokeWidth: '10'}}/>
        numberPreviousHiddenChildren += child.deepNumberOfChildren
        return childPainting
      })
  }

  static childrenBlocks(children, xOffset) {
    let numberPreviousHiddenChildren = 0 // By 'hidden' we mean children of the children we're mapping over
    return children
      .map((child, currentChildCount) => {
        const childPainting = child.paintOnSvg(xOffset + 1, currentChildCount + numberPreviousHiddenChildren + 1)
        numberPreviousHiddenChildren += child.deepNumberOfChildren
        return childPainting
      })
  }
}

export default (name = 'default name', children = []) => new Node(name, children)