import { SearchBox } from 'components/SearchBox';
import React, {Suspense, useEffect, useState} from 'react'
import { Outlet, useSearchParams } from 'react-router-dom';
import Error from '../components/Error'
import MovieItem from 'components/MovieItem';
import { SearchMovie } from '../api/FetchConst'

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