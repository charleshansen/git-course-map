class Node {
  constructor(name, children = []) {
    this.name = name
    this.children = children
  }

  toString() {
    const childrenStrings = this.children
      .map(c => c.toStringWithOffset(1))
      .join('\n')
    return `${this.name}\n${childrenStrings}`
  }

  toStringWithOffset(offset = 0) {
    const childrenStrings = this.children
      .map(c => c.toStringWithOffset(offset + 1))
      .join('\n')
    return `${Node.offsetString(offset)}${this.name}${childrenStrings.length > 0 ? '\n' : ''}${childrenStrings}`
  }

  static offsetString(offset) {
    let offsetString = ''
    for (let i = 0; i < offset; i++) {
      offsetString += '  '
    }
    return offsetString
  }
}

export default (name = 'default name', children = []) => new Node(name, children)