import React from 'react'
import injectSheet from 'react-jss'
import { hasProp } from 'lib/hasProp'
import { examples } from './example-data'
import Example from './Example'
class Examples extends React.Component {
  render () {
    return (
      <div>
        {
          examples.map(e => {
            return (
              <Example
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

export default injectSheet(styles)(Examples)