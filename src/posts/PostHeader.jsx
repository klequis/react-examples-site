import React from 'react'
import injectSheet from 'react-jss'
import Text from 'elements/Text'
import iHome from 'icons/home.svg'
import { Link } from 'react-router-dom'

const PostHeader = ({ classes, title }) => {
  return (
    <div className={classes.wrapper}>
      <Link to='/' className={classes.link}><img src={iHome} className={classes.iHome} alt='home'/></Link>
      <Text h2 noMargin>{title}</Text>
    </div>
  )
}

const styles = theme => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '2rem',
  },
  link: {
    // height: 10
    display: 'flex',
    alignItems: 'center',
  },
  iHome: {
    height: 35,
    // padding: '0 2rem',
    paddingRight: '2rem',
    // marginRight:
  },
})

export default injectSheet(styles)(PostHeader)