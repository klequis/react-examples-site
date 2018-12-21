import React from 'react'
import injectSheet from 'react-jss'
import { Route } from 'react-router-dom'
import Header from 'ui/Header'
import Footer from 'ui/Footer'
import Credits from 'elements/Credits'
import A from 'elements/A'
import { green } from 'logger'
import Section from 'elements/Section'
import Examples from 'ui/Examples'

class App extends React.Component {

  render() {
    const { articles, classes } = this.props
    return (
      <div id='App-wrapper' className={classes.wrapper}>
        <Header />
        <Section background='darkGrey' className={classes.section}>
          <div className={classes.main}>
            <Route exact path='/' component={Examples} />
            {
              articles.map((post) => {
                // const Component = getComponent(post.id)
                green('post', post)
                return (
                  <Route
                    key={post.id}
                    exact
                    path={`${post.path}/:id`}
                    render={props => (
                      <post.component {...props} title={post.title} />
                    )}
                  />
                )
              })
            }
          </div>
        </Section>
        {/* <Credits>
          <li>Ben Szabo, <A href='https://codepen.io/finnhvman/pen/jLXKJw'>Pure CSS ripple effect for Material Design</A>, CSS for the ripple effect.</li>
        </Credits> */}
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
  section: {
    height: '100%',
    flexGrow: 1,
    minHeight: 500,
  },
  main: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
})

export default injectSheet(styles)(App)