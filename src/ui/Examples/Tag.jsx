import React from 'react'
import injectSheet from 'react-jss'
import classNames from 'classnames'

const Tag = ({ classes, children }) => {
  const clsNames = classNames(
    classes.style,
    classes.tag
  )
  return (
    <span className={clsNames}>{children}</span>
  )
}


const styles = theme => ({
  style: theme.typography.xs.tag,
  tag: {
    marginRight: '0.5rem',
  },
  [theme.breakpoints.up('md')]: {
    style: theme.typography.md.tag,
  }
})

export default injectSheet(styles)(Tag)
