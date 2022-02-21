import { useState, useEffect } from 'react';
import axios from 'axios';
import { parseJsonByString } from '../../../common/utils';
import { Helmet } from 'react-helmet';
import Banner from './component/Banner';
import List from './component/List';
import Footer from './component/Footer';

const map = { Banner, List, Footer };

const render = (item, index) => {
  const Component = map[item.name];
  return Component ? <Component key={index} schema={item}/> : null
}

const Home = () => {
  const [pageSchema, setPageSchema] = useState({});
  const { children = [], attributes = {} } = pageSchema;

  useEffect(() => {
    axios.get('/api/schema/getLatestOne').then((response) => {
      const data = response?.data?.data;
      if(data) {
        setPageSchema(parseJsonByString(data.schema,{}));
      }
    })
  },[]);

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
};

export default Home;