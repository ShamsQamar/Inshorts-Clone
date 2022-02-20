import { useEffect, useState } from 'react';
import { getNews } from '../services/api.js';
// import { makeStyles } from '@material-ui/core'
// import InfiniteScroll from 'react-infinite-scroll-component';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

import Article from './Article';


const loadMore = {
  cursor: 'pointer',
  boxShadow: '0 3px 8px 0 rgb(0 0 0 / 17%), 0 3px 11px 0 rgb(0 0 0 / 18%)',
  border: 'none',
  backgroundColor: 'white',
  fontSize: '15px',
  width: '130px',
  marginLeft: '380px',
  borderRadius: '3px',
  marginTop: '17px',
  marginBottom: '41px',
  padding: '6px 10px!important',
  textAlign: 'center',
  fontWeight: '400',
  position: 'relative'
}


const Articles = ({ category }) => {

  const [news, setNews] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
   
    dailyNews();
    
  }, [category])

  useEffect(() => {
    loadNext()
  }, [page])

  const loadNext = async () => {

    let response = await getNews(page, category);
    
    // console.log(response.data);
    if (response.data.length !== 0) {
      setNews([...news, ...response.data]);
    }
}

  const dailyNews = async () => {
    
    let response = await getNews(page*0, category);
    // console.log(response.data);
    if (response.data.length !== 0) {
      setNews(response.data);
    } 
  }

  return (

    // <InfiniteScroll
    //   dataLength={news.length}
    //   next={() => setPage(page => page + 1 )}
    //   hasMore={true}
    // > </InfiniteScroll>

    <>
      {
        news.length > 0 && news.map((article, index) => (
          <Article article={article} key={article._id + index} />
        ))
      }

     <ButtonGroup disableElevation variant="contained" >
        <Button style={loadMore}
          onClick={()=> setPage(page + 1)}
        >Load More</Button>

      </ButtonGroup>

    </>

  )
}

export default Articles;