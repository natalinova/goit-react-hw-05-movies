import axios from 'axios';
import MovieItem from 'components/MovieItem';
import React, { useEffect, useState } from 'react'
// import Search from '../api/Fetcher'

const SearchHome = async (page) => {
  
    const resultHomepage = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=575a9af20b08903ff7761ed5bfc17287&page=${page}`)
  
  console.log(page)
  console.log(resultHomepage)
    if (resultHomepage.length === 0) {
        return Promise.reject(new Error(` Not any movies with key word ${page}`))
    }
        return resultHomepage
}



export const Home = () => {
  const [page, setPage] = useState(1);
  // const [query, setQuery] = useState("week");
  const[result, setResult] = useState([])
  useEffect(() => {
const fetchHomepage = async (page) => { 
        try {   
          const searchResult = await SearchHome(page);
        const data = searchResult.data.results
        setResult([...result, ...data])
          
          // return Promise.resolve(searchResult.data.results)      
        }
        catch (error){
        
          // setError(`Not any images with key word ${query}` )          
  }
  }
   fetchHomepage(page)
// eslint-disable-next-line
  },[page])
// useEffect(() => {
//    fetchImage(query)

//   },[query])
  
  const LoadMore = () => {  
    setPage( page + 1)
  }
  
 
  return (
      <>
      <MovieItem data={result} />
      <button onClick={LoadMore}> Load more</button>
      </>
      

  )
}
