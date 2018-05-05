import React, { Component } from 'react'

class JSX extends Component {
  render() {
    const title = <h1>JSX</h1>
    const code = <div><h3>code:</h3><pre><code>{"render() {\n  return <div>Hello, JSX !</div>\n}"}</code></pre></div>
    const result = <div><h3>result:</h3><div>Hello, JSX !</div></div>
    return <div>{title}{code}{result}</div>
  }
}

export default JSX