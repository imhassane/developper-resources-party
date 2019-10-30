import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// Replace this with your project's endpoint
const GRAPHCMS_API = 'https://api-euwest.graphcms.com/v1/ck27tuqlr2hkm01glg8m78hd6/master'

export default () => ({
  link: new HttpLink({ uri: GRAPHCMS_API }),
  cache: new InMemoryCache(),
  defaultHttpLink: false
})
