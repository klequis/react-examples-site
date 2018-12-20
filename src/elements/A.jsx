import React from 'react'
import { compose } from 'recompose'
import withTheme from 'theme/withTheme'
import injectSheet from 'react-jss'

const getColorValue = (theme, color) => {
  const c = theme.palette.textColors.find(c => c.name === color)
  return c.value
}

const A = ({ children, classes, color='default', href, theme}) => {
  const colorStyle = {
    color: getColorValue(theme, color)
  }
  return (
    <a
      href={href}
      className={classes.anchor}
      style={colorStyle}
    >
      {children}
    </a>
  )
}

const styles = theme => ({
  anchor: theme.anchor
})

export default compose(
  withTheme,
  injectSheet(styles)
)(A)