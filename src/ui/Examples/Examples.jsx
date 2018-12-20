import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { getAllArticles } from 'redux/selectors/article'
import injectSheet from 'react-jss'
import Example from './Example'

class Examples extends React.Component {
  render () {
    const { examples } = this.props
    return (
      <div>
        {
          examples.map(e => {
            return (
              <Example
                key={e.id}
                example={e}
              />

            )
          })
        }
      </div>
    )
  }
}

const styles = theme => ({

})

const mstp = (state) => {
  return {
    examples: getAllArticles(state)
  }
}

export default compose(
  injectSheet(styles),
  connect(mstp)
)(Examples)