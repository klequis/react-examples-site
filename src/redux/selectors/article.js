export const getAllArticles = (state) => state.articles

export const getComponentArticles = (state) => state.articles.filter(a => a.type === 'component')