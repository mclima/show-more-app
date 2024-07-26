import { useState } from 'react'
import './styles.css'

export default function App() {
  return (
    <div className="panel-container">
      <h1>Show More</h1>
      <ShowMore>
        Inheritance and the prototype chain. In programming, inheritance refers
        to passing down characteristics from a parent to a child so that a new
        piece of code can reuse and build upon the features of an existing one.
        JavaScript implements inheritance by using objects. Each object has an
        internal link to another object called its prototype. That prototype
        object has a prototype of its own, and so on until an object is reached
        with null as its prototype. By definition, null has no prototype and
        acts as the final link in this prototype chain. It is possible to mutate
        any member of the prototype chain or even swap out the prototype at
        runtime, so concepts like static dispatching do not exist in JavaScript.
        JavaScript is a bit confusing for developers experienced in class-based
        languages (like Java or C++), as it is dynamic and does not have static
        types.
      </ShowMore>

      <ShowMore collapsedNumWords={30}>
        Inheritance with the prototype chain. Inheriting properties: JavaScript
        objects are dynamic "bags" of properties (referred to as own
        properties). JavaScript objects have a link to a prototype object. When
        trying to access a property of an object, the property will not only be
        sought on the object but on the prototype of the object, the prototype
        of the prototype, and so on until either a property with a matching name
        is found or the end of the prototype chain is reached.
      </ShowMore>
      <p class="footnote">
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain"
          target="_blank"
          rel="noreferrer"
        >
          Source
        </a>
      </p>
    </div>
  )
}

function ShowMore({
  collapsedNumWords = 60,
  expandButtonText = 'Show More',
  collapseButtonText = 'Show Less',
  buttonColor = '#d32539',
  expanded = false,
  className = 'panel-item',
  children,
}) {
  const [isExpanded, setIsExpanded] = useState(expanded)

  const displayText = isExpanded
    ? children
    : children.split(' ').slice(0, collapsedNumWords).join(' ') + '...'

  const buttonStyle = {
    background: 'none',
    border: 'none',
    font: 'inherit',
    cursor: 'pointer',
    marginLeft: '6px',
    color: buttonColor,
  }

  return (
    <div className={className}>
      <span>{displayText}</span>
      <button onClick={() => setIsExpanded((exp) => !exp)} style={buttonStyle}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  )
}
