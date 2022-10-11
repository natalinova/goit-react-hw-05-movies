import { SearchBox } from 'components/SearchBox';
import React, {Suspense, useEffect, useState} from 'react'
import { Outlet, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import Error from '../components/Error'
import MovieItem from 'components/MovieItem';
// import Casts from 'components/Casts';
// import { Link } from 'react-router-dom'
const SearchMovie = async ( query) => {
  
    const resultMovie = await axios.get(`https://api.themoviedb.org/3/search/movie/?api_key=575a9af20b08903ff7761ed5bfc17287&query=${query}`)
  
  // console.log(page)
  console.log(resultMovie)
    if (resultMovie.length === 0) {
        return Promise.reject(new Error(` Not any movies with key word ${query}`))
    }
        return resultMovie
}

const Movies = () => {
  const [search, setSearch] = useState([]);
  const [error, setError] = useState(null)
  const [searchParams, setSearchParams] = useSearchParams();
  const filterSearch = value => {
    setSearchParams(value !== "" ? { filter: value } : {})
  }
  const searchQueryFull = searchParams.get('filter') ?? "";
  const searchQuery = searchQueryFull.toLowerCase();
  const fetchMovie = async (query) => {
    try {
      const searchResult = await SearchMovie(query);
      const data = searchResult.data.results
      setSearch(data)
      if (data.length === 0) {
        setError(`Not any movies for your query`)
      }
      else {
        setError(null)
      }   
    }
    catch (error) {    
    }
  }
  useEffect(() => {
    if (searchQuery === "") { return };
    fetchMovie(searchQuery)
    // eslint-disable-next-line
  }, [searchQuery]);

  console.log(searchQuery)
  return (
    <>
      <SearchBox
        value={searchQueryFull}
        onChange={filterSearch}
      />
      {(error === null) ? ((searchQuery !== "") ? <MovieItem data={search} /> : <div></div>) : <Error message={ error} />}
      
      
      <Suspense fallback={"Loading..."}> 
                <Outlet/>
            </Suspense>
    </>
  )
}
export default Movies