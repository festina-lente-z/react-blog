import Banner from './component/Banner'
import List from './component/List'
import Footer from './component/Footer'
import { parseJsonByString } from '../../../common/utils'

const pageSchema = parseJsonByString(window.localStorage?.schema,{})
const children = pageSchema.children || []

const map = { Banner, List, Footer }

const render = (item, index) => {
  const Component = map[item.name]
  return Component ? <Component key={index} schema={item}/> : null
}

const Home = () => {
  return (
    <div>
      {
        children.map((item,index) => {
          return render(item, index)
        })
      }
    </div>
  )
}

export default Home