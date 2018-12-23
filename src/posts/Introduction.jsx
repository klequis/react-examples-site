import React from 'react'
import { compose } from 'recompose'
import injectSheet from 'react-jss'
import Text from 'elements/Text'
import A from 'elements/A'
import withPost from './withPost'

const Introduction = (props) => {
  return (

    <div>

      <Text body>React Examples is a listing of examples that are derived from projects I have worked on. Each example is either an article with a link to a repository or a direct link to a repository.</Text>
      <Text body>React Examples just got started in December 2018. I'll be adding an example weekly for the next couple of months. After that it may become more ad-hoc. </Text>
      <Text h2>How to use</Text>
      <Text body>Each example link on the home page gos to either an article, which in turn has a link to a GitHub repository, or directly to a GitHub repository. When there is an article the repositorie's README.md will be very sparce.</Text>

      <Text body>Most projects are using React JSS. If you are not familiar with it you may want to refer to <A href='https://www.npmjs.com/package/react-jss'>JSS Integration with React (react-jss)</A> and <A href='https://cssinjs.org'>JSS (CSS in JSS)</A>. However, it looks similar enough to CSS that you should have no problem reading it.</Text>
      <Text h3>Project Structure</Text>
      <Text body>Each project has the same project structure. The example is in the /src/example folder unless otherwise stated. While the example itself is minimal, the project overall will often contain more than is needed to illustrate the subject of the example. This is to make it easier for me to quickly create new examples without having to customize each.</Text>
      <Text h4>Files and Directories in /src</Text>
      <ul>
        <li>/elements - reusable elements that may or may not be used in a given example.</li>
        <li>/example - usually contains the example</li>
        <li>/lib - some helpful functions</li>
        <li>/logger - a utility for logging to the browser's console in color.</li>
        <li>/media - images</li>
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