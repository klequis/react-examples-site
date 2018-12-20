import { posts as postData } from 'data/post-data'
// const uuidv4 = require('uuid/v4');
import uuidv4 from 'uuid/v4'
import { merge } from 'ramda'

// adds ids to examples
// const createExampleData = () => {
//   return exampleData.map(e => {
//     const id = { id: uuidv4() }
//     return merge(e, id)
//   })
// }
const posts = (state = postData, { type, payload }) => {
  return state
}

export default posts