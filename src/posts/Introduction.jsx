import React from 'react'
import { compose } from 'recompose'
import injectSheet from 'react-jss'
import Text from 'elements/Text'
import A from 'elements/A'
import withPost from './withPost'

const Introduction = (props) => {
  return (

    <div>
      <Text body>
        I'm always trying new things with React. In the past I would give a try/example a nice name and put it in a folder. Many months later I remember making it but couldn't remember what I called it or what folder I put it in. React Examples respresents my effort to to keep track of valuable examples as well as share them with others.
      </Text>
      <Text body>
        Each example links to a GitHub repository that you can clone and tryout. Any notes or explanation on the example is in the README file.
      </Text>
      <Text body>
        I frequently use <A href='https://www.npmjs.com/package/react-jss'>React JSS</A> which is a plugin to <A href='https://cssinjs.org'>JSS</A>.
      </Text>
      <Text body>
        Examples are often derived from other's work. Whenever this is true you will find links to the original source(s) at the bottom of the readme.
      </Text>

      <Text h3>Project Structure</Text>
      <Text body>
        Some of the projects use a starter project, which I find useful, but has some incomplete but educational and useful functionality around theaming. Here are a few quick notes on the starter project.
      </Text>
      <Text h4>Files and Directories in /src</Text>
      <ul>
        <li>/elements - reusable elements that may or may not be used in a given example.</li>
        <li>/lib - some helpful functions</li>
        <li>/logger - a utility for logging to the browser's console in color.</li>
        <li>/media - images that are or could be used in more than one component. If an image will always only be used by one component, it will be in the component's folder. </li>
        <li>/theme - files to support the theme. The theme implementation is new and evolving. Therefore, it may differ from project to project.</li>
        <li>/ui - unique components</li>
        <li>/Wrapper.jsx - a component that adds global styles to the project.</li>
      </ul>

    </div>
  )
}

const styles = theme => ({

})
export default compose(
  withPost,
  injectSheet(styles)
)(Introduction)