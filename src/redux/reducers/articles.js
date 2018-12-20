import { articles as articleData } from 'data/articles'
// const uuidv4 = require('uuid/v4');
import uuidv4 from 'uuid/v4'
import { merge } from 'ramda'

// adds ids to examples
const createExampleData = () => {
  return articleData.map(e => {
    if (e.type === 'article') {
      return e // already has an id
    }
    // needs an id to be used as component key
    const id = { id: uuidv4() }
    return merge(e, id)
  })
}
const examples = (state = createExampleData(), { type, payload }) => {
  return state
}

export default examples