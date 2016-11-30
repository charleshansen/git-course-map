import React from 'react'

import Square from './components/svg/Square'

class Node {
  constructor(name, childNumber = 7, children = []) {
    this.name = name
    this.childNumber = childNumber
    this.children = children
  }

  toString() {
    const childrenStrings = this.children
      .map(c => c.toStringWithOffset(1))
      .join('\n')
    return `${this.name} ${this.childNumber}\n${childrenStrings}`
  }

  toStringWithOffset(offset = 0) {
    const childrenStrings = this.children
      .map(c => c.toStringWithOffset(offset + 1))
      .join('\n')
    return `${Node.offsetString(offset)}${this.name} ${this.childNumber}${childrenStrings.length > 0 ? '\n' : ''}${childrenStrings}`
  }

  static offsetString(offset) {
    let offsetString = ''
    for (let i = 0; i < offset; i++) {
      offsetString += '  '
    }
    return offsetString
  }

  paintOnSvg(xOffset = 0, yOffset = 0) {
    const childrenSvg = this.children
      .map(c => c.paintOnSvg(xOffset + 1, c.childNumber))

    const x = xOffset * 30
    const y = yOffset * 30

    return (
      <g key={Math.random()}>
        <Square size="15" x={x} y={y}/>
        <text x={x + 20} y={y + 15}>{this.name}</text>
        {childrenSvg}
      </g>
    )
  }
}

export default (name = 'default name', childNumber = 7, children = []) => new Node(name, childNumber, children)