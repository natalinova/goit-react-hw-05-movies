import { SearchBox } from 'components/SearchBox';
import React, {Suspense, useEffect, useState} from 'react'
import { Outlet, useSearchParams } from 'react-router-dom';
import Error from '../components/Error'
import MovieItem from 'components/MovieItem';
import { Search } from '../api/FetchConst'
import {Form} from "../MoviesStyled"

const Movies = () => {
  const [search, setSearch] = useState([]);
  const [error, setError] = useState(null)
  const [searchParams, setSearchParams] = useSearchParams('');
  const [query, setQuery] = useState('')
  const filterSearch = value => {
    setSearchParams(value !== "" ? { search: value } : {})
  }
  const searchQueryFull = searchParams.get('search') ?? "";
  const searchQuery = searchQueryFull.toLowerCase();
  const fetchMovie = async (query) => {
    try {

      const searchResult = await Search("/search", "", "", `&query=${query}`);
      const data = searchResult.data.results;
      setSearch(data)
      localStorage.setItem('result', JSON.stringify(data))
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
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(searchQuery)
    setQuery(searchQueryFull)
  }

  useEffect(() => {
    const movieFromStorage = localStorage.getItem('result');
      if (movieFromStorage !== null) {
        console.log(movieFromStorage)
        setSearch(JSON.parse(movieFromStorage));
        console.log(search);
      }
    if (query === "") {
    return
    }
    fetchMovie(query)
     // eslint-disable-next-line 
  }, [query])
  useEffect(() => {
      const movieFromStorage = localStorage.getItem('result');
    if (movieFromStorage !== null) { 
      localStorage.removeItem('result')
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <SearchBox
        value={searchQueryFull}
        onChange={filterSearch}
      />
    </Form>
      
      {(error === null) ? ((search !== "") ? <MovieItem data={search} /> : <div></div>) : <Error message={ error} />}
      <Suspense fallback={"Loading..."}> 
                <Outlet/>
            </Suspense>
    </>
  )
}
export default Movies