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
// <Link to={example.path}>{example.title}</Link>
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
    marginBottom: 16,
    textAlign: 'left',
  },

})

export default injectSheet(styles)(Example)