import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import injectSheet from 'react-jss'
import { Route } from 'react-router-dom'
import { getComponentArticles } from 'redux/selectors/article'
import Header from 'ui/Header'
import Main from 'ui/Main'
import Footer from 'ui/Footer'
import Credits from 'elements/Credits'
import A from 'elements/A'
import { green } from 'logger'

class App extends React.Component {

  render() {
    const { articles, classes } = this.props
    // console.log('abcde', this.props.classes)
    green('articles', articles)
    return (
      <div id='App-wrapper' className={classes.wrapper}>
        <Header />
        <Main />
        {
          articles.map((post) => {
            // const Component = getComponent(post.id)
            return (
              <Route
                key={post.id}
                exact
                path={post.path}
                render={props => (
                  <post.component {...props} title={post.title} />
                )}
              />
            )
          })
        }
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

const mstp = (state) => {
  return {
    articles: getComponentArticles(state)
  }
}

export default compose(
  injectSheet(styles),
  connect(mstp)
) (App)