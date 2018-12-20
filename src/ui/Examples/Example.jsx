import React from 'react'
import injectSheet from 'react-jss'
import Text from 'elements/Text'
import A from 'elements/A'
import Tag from './Tag'
import iTag from './media/tag.svg'

const Example = (props) => {
  const {
    classes,
    example,
  } = props

  const tags = example.tags.map((value, index, arr) => {
    const len = arr.length

    return (
      <Tag>{value}{index+1 < len ? ',' : '' }</Tag>
    )
  })

  return (
    <div className={classes.wrapper}>
      <Text h3 color='black' noMargin className={classes.title}>
        <A
          href={example.gitHubUrl}
          color='blue'
        >
          {example.title}
        </A>
      </Text>
      <Text body color='black'>{example.description}</Text>
      <div className={classes.tags}>
        <img src={iTag} className={classes.iTag} alt='tag icon' />{tags}
      </div>
    </div>
  )
}

const styles = theme => ({
  wrapper: {
    backgroundColor: '#fff',
    padding: '1rem',
    margin: 10,
  },
  title: {
    marginBottom: 16,
    textAlign: 'left',
  },
  tags: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '1.5rem',
  },
  iTag: {
    maxHeight: 20,
    marginRight: '0.75rem'
  }
})

export default injectSheet(styles)(Example)