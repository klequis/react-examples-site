import React from 'react'
import injectSheet from 'react-jss'
import PostHeader from './PostHeader'

function withPost(Component) {
  function WithPost(props) {
    // console.log('props', props)
    const { classes, title } = props
    return (
      <div className={classes.wrapper}>
        <PostHeader title={title} />
        <Component {...props} />
      </div>
    )
  }
  const styles = {
    wrapper: {
      // backgroundColor: '#fff',
      padding: '0 2rem',
      width: '100%',
    },
  }
  return injectSheet(styles)(WithPost)
}



export default withPost