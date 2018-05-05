import React, { Component } from 'react'

class ComponentsAndProps extends Component {
	render() {
    return <div>
      <h1>Components and Props</h1>
      <h2>Functional Component</h2>
      <h3>code:</h3>
      <pre>
        <code class="jsx">{"foo(props) {\n  return <div>I'm component {props.name} !</div>\n}"}</code>
      </pre>
      <pre>
        <code class="jsx">{"render(){\n  return {this.foo({ name: 'Foo' })}\n}"}</code>
      </pre>
      <h3>result:</h3>
      <div>{this.foo({ name: 'Foo' })}</div>
      <h2>Class Component</h2>
      <h3>code:</h3>
      <pre>
        <code class="jsx">{"class Bar extends Component {\n  render() {\n    return <div>I'm component {this.props.name} !</div>\n  }\n}"}</code>
      </pre>
      <pre>
        <code class="jsx">{"<Bar name=\"Bar\" />"}</code>
      </pre>
      <h3>result:</h3>
      <Bar name="Bar" />
    </div>
    // return this.foo({ name: 'Foo' })
  }
  foo(props) {
    return <div>I'm component {props.name} !</div>
  }
}

class Bar extends Component {
  render() {
    return <div>I'm component {this.props.name} !</div>
  }
}

export default ComponentsAndProps