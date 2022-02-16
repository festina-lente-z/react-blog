import { parseJsonByString } from '../../../common/utils'
import { Helmet } from 'react-helmet'
import Banner from './component/Banner'
import List from './component/List'
import Footer from './component/Footer'

const pageSchema = parseJsonByString(window.localStorage?.schema,{})
const { children = [], attributes = {} } = pageSchema

const map = { Banner, List, Footer }

const render = (item, index) => {
  const Component = map[item.name]
  return Component ? <Component key={index} schema={item}/> : null
}

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>
          { attributes.title || '' }
        </title>
      </Helmet>
      {
        children.map((item,index) => {
          return render(item, index)
        })
      }
    </div>
  )
}

export default Home