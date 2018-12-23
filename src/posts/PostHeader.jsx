import React from 'react'
import injectSheet from 'react-jss'
import Text from 'elements/Text'
import iHome from 'icons/home.svg'
import iGitHub from 'icons/github.svg'
import { Link } from 'react-router-dom'
import A from 'elements/A'

const PostHeader = ({ classes, gitHubUrl=null, title, type }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.toolbar}>
        <Link
          to='/'
          className={classes.link}
        >
          <img
            src={iHome}
            className={classes.iHome}
            alt='home'
          />
        </Link>
        {
          !gitHubUrl
            ? null
            :  <A
                  href={gitHubUrl}
                  className={classes.link}
                >
                  <img
                    src={iGitHub}
                    className={classes.iGitHub}
                    alt='github logo'
                  />
                </A>
        }
      </div>

      <Text h2 noMargin>{title}</Text>
    </div>
  )
}

const styles = theme => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '2rem',
  },
  toolbar: {
    // backgroundColor: 'rgb(25, 25, 25)',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '1rem 1rem 2rem 0'
  },
  link: {
    display: 'flex',
    alignItems: 'center',
  },
  iHome: {
    height: 35,
    paddingRight: '2rem',
  },
  iGitHub: {
    height: 35,
  }
})

export default injectSheet(styles)(PostHeader)