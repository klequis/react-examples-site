import { articles as articleData } from 'data/articles'
// const uuidv4 = require('uuid/v4');
import uuidv4 from 'uuid/v4'
import {
  concat,
  filter,
  has,
  merge,
  reject,
  sort,
} from 'ramda'

const addIds = () => {
  return articleData.map(e => {
    if (e.type === 'article') {
      return e // already has an id
    }
    // needs an id to be used as component key
    const id = { id: uuidv4() }
    return merge(e, id)
  })
}

const hasPinned = has('pinned')

const getPinnedArticles = (data) => {
  const p0 = filter(hasPinned, data)
  const diff = function(a1, a2) { return a1.pinned - a2.pinned }
  return sort(diff, p0)
}

const getUnpinnedArticles = (data) => {
  const up0 = reject(hasPinned, data)
  const diff = (a, b) =>  new Date(b.date) - new Date(a.date)
  return sort(diff, up0)
}

// adds ids to examples
const createExampleData = () => {
  const r = addIds()
  const pinned = getPinnedArticles(r)
  const unpinned = getUnpinnedArticles(r)
  return concat(pinned, unpinned)

}


const examples = (state = createExampleData(), { type, payload }) => {
  return state
}

export default examples