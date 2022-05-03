export const getGitHubSearchUri = (term, type, page, perPage) => {
  return `https://api.github.com/search/users?page=${page}&per_page=${perPage}&q=${term}+type:${type}`
}
