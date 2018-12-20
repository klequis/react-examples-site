import React from 'react'
import injectSheet from 'react-jss'
import { Route } from 'react-router-dom'
import Header from 'ui/Header'
import Main from 'ui/Main'
import Footer from 'ui/Footer'
import Credits from 'elements/Credits'
import A from 'elements/A'

class App extends React.Component {

  render() {
    const { classes } = this.props
    // console.log('abcde', this.props.classes)
    return (
      <div id='App-wrapper' className={classes.wrapper}>
        <Header />
        <Main />
        <Credits>
          <li>Ben Szabo, <A href='https://codepen.io/finnhvman/pen/jLXKJw'>Pure CSS ripple effect for Material Design</A>, CSS for the ripple effect.</li>
        </Credits>
        <Footer />
      </div>
    )
  }
}


const styles = theme => ({
  wrapper: {
    // backgroundColor: 'red',
    minHeight: '100vh',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'space-between',
  },

})

export default injectSheet(styles)(App)