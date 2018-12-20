import React from 'react'
import injectSheet from 'react-jss'
import iTag from './media/tag.svg'
import { hasProp } from 'lib/hasProp'
import Tag from './Tag'
import { removeSpaceFromString } from 'lib/removeSpaceFromString'

// <img src={iTag} className={classes.iTag} alt='tag icon' />

const tags = (example) => {
  if (hasProp('tags', example)) {
    return example.tags.map((value, index, arr) => {
      const len = arr.length
      const titleIdPart = removeSpaceFromString(value.substring(1,6))
      const key = `${index}-${titleIdPart}`
      return (
        <Tag
          key={key}
        >
          {value}{index+1 < len ? ',' : '' }
        </Tag>
      )
    })

  } else {
    return null
  }

}

const Tags = ({ classes, example}) => {
  const renderedTags = tags(example)
  if (renderedTags) {
    return (
      <div className={classes.tags}>
        <img src={iTag} className={classes.iTag} alt='tag icon' />{renderedTags}
      </div>
    )
  } else {
    return null
  }

}

const styles = theme => ({
  tags: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '1.5rem',
  },
  iTag: {
    maxHeight: 20,
    marginRight: '0.75rem'
  },
})

export default injectSheet(styles)(Tags)