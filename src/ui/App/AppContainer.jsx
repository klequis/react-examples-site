import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'
import { getComponentArticles } from 'redux/selectors/article'

import App from './App'

const AppContainer = ({ articles }) => {
  return (
    <App
      articles={articles}
    />
  )
}

const mstp = (state) => {
  return {
    articles: getComponentArticles(state)
  }
}
export default compose(
  withRouter,
  connect(mstp)
)(AppContainer)