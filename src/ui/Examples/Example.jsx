import React from 'react'
import injectSheet from 'react-jss'
import { Link } from 'react-router-dom'
import Text from 'elements/Text'
import A from 'elements/A'
import { hasProp } from 'lib/hasProp'
import Tags from './Tags'

const Example = (props) => {
  const {
    classes,
    example,
  } = props

  const hasPath = hasProp('path', example)
  return (
    <div className={classes.wrapper}>
      <Text h2 color='black' noMargin className={classes.title}>
        {
          hasPath
            ? <Link to={`${example.path}/${example.id}`} className={classes.routerLink}>{example.title}</Link>
            : <A
                href={example.gitHubUrl}
                color='blue'
                target='_blank'
              >
                {example.title}
              </A>
        }
      </Text>
      <Text body color='black'>{example.description}</Text>
      <Tags
        example={example}
      />
    </div>
  )
}

const styles = theme => ({
  routerLink: {
    color: '#005ca8',
  },
  wrapper: {
    backgroundColor: '#fff',
    padding: '1rem',
    margin: 10,
  },
  title: {
    marginBottom: 8,
    textAlign: 'left',
  },
  iGitHub: {
    height: 22,
    margin: '0 0.5rem',
  },
  iArticle: {
    height: 21,
    margin: '0 0.5rem',
  },
  dateAndIcons: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
})

export default injectSheet(styles)(Example)
