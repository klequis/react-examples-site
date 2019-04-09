import React from 'react'
import injectSheet from 'react-jss'
import Section from 'elements/Section'
import Text from 'elements/Text'

const Welcome = ({ classes }) => {
  return (
    <div id='Welcome'>
      <Section background='darkGrey' className={classes.section}>
        <h3>Welcome to React Examples!</h3>
        <Text body>React Examples is a listing of example projects that make use of a wide range of technologies, but all commonly used in React projects. Each example is a link to a GitHub repository. More information about the project can be found in the README.</Text>
        <Text body>If you have questions or comments please open an issue with the 'question' label and I'll do my best to answer.</Text>
        <Text body>If you would like to make an improvement to one of the projects, feel free to open a pull request.</Text>
      </Section>
    </div>
  )
}

const styles = theme => ({
  section: {
    padding: '1rem 0',
    paddingRight: '10%',
    paddingLeft: '10%',
    [theme.breakpoints.up('lg')]: {
      paddingRight: 0,
      paddingLeft: 0,
    }
  },

})

export default injectSheet(styles)(Welcome)
