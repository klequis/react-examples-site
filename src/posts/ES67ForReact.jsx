import React from 'react'
import injectSheet from 'react-jss'
import { compose } from 'recompose'
import Text from 'elements/Text'
import Code from 'elements/Code'
import withPost from './withPost'
import { green } from 'logger'

const noParams = `
// good
() => { \\\\ body }
// no good
   => { \\\\ body }
`.trim()



const ES67ForReact = (props) => {
  // green('ArrowFunctions: props', props)
  return (
    <div>
      <ul>
        <li>arrow functions</li>
        <li>object spread operator</li>
        <li>...rest</li>
        <li>property initializers</li>
        <li>static class properties</li>
        <li>do expressions</li>
        <li>Object rest</li>
        <li>async functions</li>
        <li>class decorators</li>
        <li>template strings</li>
        <li>array and object destructuring</li>
        <li>default parameter values</li>
        <li>Let & Const</li>
      </ul>
          <Code
            code={noParams}
          />
    </div>
  )
}

const styles = theme => ({

})
export default compose(
  withPost,
  injectSheet(styles)
)(ES67ForReact)