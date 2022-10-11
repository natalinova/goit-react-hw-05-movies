import MovieItem from 'components/MovieItem';
import React, { useEffect, useState } from 'react'
import { Button, TotalMovies } from '../MoviesStyled'
import { SearchHome } from '../api/FetchConst';
import Error from 'components/Error';

const Home = () => {
  const [page, setPage] = useState(1);
  const [result, setResult] = useState([]);
  const [error, setError] = useState(null)
  useEffect(() => {
const fetchHomepage = async (page) => { 
        try {   
          const searchResult = await SearchHome(page);
        const data = searchResult.data.results
        setResult([...result, ...data])
        }
        catch (error){       
          setError(`Not any trending movie` )          
  }
  }
   fetchHomepage(page)
// eslint-disable-next-line
  },[page])

  const LoadMore = () => {  
    setPage( page + 1)
  }
  
  return (
    <TotalMovies>
      {(error === null) ? <MovieItem data={result} /> : <Error message={ error} />}
     
      <Button onClick={LoadMore}> Load more</Button>
      </TotalMovies>
      

  )
}
export default Home