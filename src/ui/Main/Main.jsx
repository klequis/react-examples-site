import React from 'react'
import injectSheet from 'react-jss'
import Section from 'elements/Section'
// import RippleButtonJSS from 'example/RippleButtonJSS'
// import Text from 'elements/Text'
import Examples from 'ui/Examples'


const Main = ({ classes }) => {

  return (
    <Section background='darkGrey' className={classes.section}>
      <div className={classes.wrapper}>
        <Examples />
      </div>
    </Section>
  )
}

const styles = {
  wrapper: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  section: {
    height: '100%',
    flexGrow: 1,
    minHeight: 500,

  }

}

export default injectSheet(styles)(Main)