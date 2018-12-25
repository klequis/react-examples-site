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

const oneParam = `
// good
x => { \\\\ body }
// also ok - parentheses are optional
(x) => { \\\\ body }
`.trim()

const twoParams = `
// good
(x, y) => { \\\\ body }
// no good - parentheses are not optional
`.trim()

const oneStatementBody = `
// traditional
var traditional = function(val) {
  x = val * 2
  y = x + 1
  return y
}
`.trim()

const rule1 = `
// traditional
var traditional01 = function() {
return 'traditional01
}

// arrow,
var arrow01 = () => 'arrow01'
`.trim()

const rule2 = `
// traditional
var traditional02 = function(str) {
  return str
}

// arrow
var arrow02 = str => str'
`.trim()


const rule3 = `
// traditional
var traditional03 = function(str1, str2){
return str1 + " " + str2
}

// arrow'
var arrow03 = (str1, str2) => str1 + " " + str2
`.trim()

const rule4 = `
// traditional',
var traditional04 = function(str) {
  var strOut',
  if (str.length > 4) {
    strOut = str + ' is more than 4 characters'
  } else {
    strOut = str + ' is less than 4 characters'
}',
  return strOut
}

// arrow
var arrow04 = <b>str => {
  var strOut
  if (str.length > 4) {
    strOut = str + ' is more than 4 characters'
  } else {',
    strOut = str + ' is less than 4 characters'
  }
  return strOut
}
`.trim()

const ArrowFunctions = (props) => {
  green('ArrowFunctions: props', props)
  return (
    <div>
      <Text body>This guide is for those who understand traditional JavaScript function but are not familiar with arrow functions. It will show tradition functions and those same functions rewritten with arrow syntax.</Text>
      <Text h2>What Are Arrow Functions?</Text>
      <Text body>Arrow functions do not introduce any new functionality / abilities to JavaScript. They are simply a new  and briefer syntax for writing functions that could be written with the traditional function() {} syntax.</Text>
      <Text h2>Must I Use Arrow Functions?</Text>
      <Text body>No. There is no requirement to do so and there is nothing you can do with arrow functions that you cannot do with traditional functions.</Text>
      <Text h2>Should I Use Arrow Functions?</Text>
      <Text body>That is up to you but I suggest you get to know them well because, unless you write code in isolation, and few if any of us do, you are going to be reading code that has them. You may even work on a team that requires their use.</Text>
      <Text body>All the code in this guide can be downloaded from GitHub <a href="https://github.com/klequis/intro-arrow-functions">Arrow Functions with JavaScript</a></Text>
      <Text h2>Arrow Function Rules</Text>
      <Text body>The examples in this guide will illustrate the following rules.</Text>
      <ol>
        <li>If the arrow functions takes no parameters you <b>must</b> use <code>()</code> to indicate were they would be.
          <Code
            code={noParams}
          />
        </li>
        <li>If the arrow function takes only one parameter you <b>do not</b> need the <code>()</code>.
          <Code
            code={oneParam}
          />
        </li>
        <li>If the arrow function takes 2 or more parameters you <b>must</b> have the <code>()</code>.
          <Code
            code={twoParams}
          />
        </li>
        <li>If the function body is only one statement you <b>do not</b> need <code>{'{}'}</code>and you <b>do not</b> need a <code>return</code>  statement.
          <Code code={`(x, y) => x + y`} />
        </li>
        <li>If the function body has more than one statement you <b>do</b> need <code>{}</code> and you <b>do</b> need a <code>return</code> statement.
          <Code
            code={oneStatementBody}
          />
        </li>
      </ol>
      <Text h2>Examples</Text>
      <Text h3>Rule 1</Text>
      <ul>
        <li>An arrow function that takes no parameters <b>must</b> have () on the left side of the => to indicate this fact.</li>
        <li>This example function takes no parameters and returns a string.</li>
        <li>The traditional function indicates there are no parameters by having empty '()' following the 'function' keyword.</li>
        <li>The arrow functions indicates no parameters by having the empty '()' on the left side of the arrow.</li>
      </ul>
      <Code
        code={rule1}
      />
      <Text h3>Rule 2</Text>
      <ul>
        <li>If the arrow function takes only one parameter you <b>do not</b> need the <code>()</code>.</li>
      </ul>
      <Code
        code={rule2}
      />
      <Text h3>Rule 3</Text>
      <ul>
        <li>If the arrow function takes 2 or more parameters you <b>must</b> have the <code>()</code>.</li>
      </ul>
      <Code code={rule3}/>

      <Text h3>Example 4</Text>
      <Text subtitle3>Rules 4 & 5</Text>
      <ul>
        <li><b>Rule 4:</b> If the function body is only one statement you <b>do not</b> need <code>{}</code>and you <b>do not</b> need a <code>return</code>  statement.</li>
        <li><b>Rule 5:</b> If the function body has more than one statement you <b>do</b> need <code>{}</code> and you <b>do</b> need a <code>return</code> statement.</li>
      </ul>
      <Code code={rule4} />

      <Text body>That is a good start. As a way to learn, I highly suggest you take functions you have already written & understand using traditional functions and rewrite them as arrow functions. Start simple!</Text>
    </div>
  )
}

const styles = theme => ({

})
export default compose(
  withPost,
  injectSheet(styles)
)(ArrowFunctions)