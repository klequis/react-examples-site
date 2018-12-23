import React from 'react'
import injectSheet from 'react-jss'
import { Link } from 'react-router-dom'
import Text from 'elements/Text'
import A from 'elements/A'
import { hasProp } from 'lib/hasProp'
import Tags from './Tags'
import iArticle from 'icons/article2.svg'
import iGitHub from 'icons/github-black.svg'

const Example = (props) => {
  const {
    classes,
    example,
  } = props


  const hasPath = hasProp('path', example)
  const hasArticle = example.type === 'component'
  const hasRepo = (hasProp('gitHubUrl', example) && example.gitHubUrl)
  return (
    <div className={classes.wrapper}>
      <Text h3 color='black' noMargin className={classes.title}>
        {
          hasPath
            ? <Link to={`${example.path}/${example.id}`}>{example.title}</Link>

            : <A
                href={example.gitHubUrl}
                color='blue'
                target='_blank'
              >
                {example.title}
              </A>
        }
      </Text>
      <div className={classes.dateAndIcons}>
        <Text caption color='black'>{example.date}</Text>
        <div>
          {hasArticle ? <img src={iArticle} className={classes.iArticle} title='Has article' alt='article' /> : null}
          {hasRepo ? <img src={iGitHub} className={classes.iGitHub} title='Has repo' alt='git hub logo' /> : null}
        </div>
      </div>
      <Text body color='black'>{example.description}</Text>
      <Tags
        example={example}
      />
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