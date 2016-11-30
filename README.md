# git-js-svg-tree

## DSL

```js
const root = node('foo', 0, [
  node('bar', 1),
  node('gaz', 2, [
    node('leaf1', 3),
    node('leaf2', 4),
  ]),
  node('urk', 5, [
    node('leaf3', 6, [
      node('leaf4', 7),
      node('leaf5', 8),
      node('leaf6', 9)
    ]),
    node('leaf7', 10)
  ])
])
```

Outputs:

(tba)