import { SearchBox } from 'components/SearchBox';
import React, {Suspense, useEffect, useState} from 'react'
import { Outlet, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import MovieItem from 'components/MovieItem';
// import Casts from 'components/Casts';
// import { Link } from 'react-router-dom'
const SearchMovie = async (page, query) => {
  
    const resultMovie = await axios.get(`https://api.themoviedb.org/3/search/movie/?api_key=575a9af20b08903ff7761ed5bfc17287&page=${page}&query=${query}`)
  
  console.log(page)
  console.log(resultMovie)
    if (resultMovie.length === 0) {
        return Promise.reject(new Error(` Not any movies with key word ${query}`))
    }
        return resultMovie
}

export const Movies = () => {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filterSearch = value => {
    setSearchParams(value !== "" ? { filter: value } : {})
  }
  const searchQueryFull = searchParams.get('filter') ?? "";
  const searchQuery = searchQueryFull.toLowerCase();
  const fetchMovie = async (page, query) => { 
        try {   
          const searchResult = await SearchMovie(page, query);
        const data = searchResult.data.results
        setSearch([...search, ...data])
          
          // return Promise.resolve(searchResult.data.results)      
        }
        catch (error){
        
          // setError(`Not any images with key word ${query}` )          
  }
  }
  useEffect(() => {
    if (search === [] || searchQuery === "") { return };
    fetchMovie(page, searchQuery)
    // eslint-disable-next-line
  }, [page, searchQuery]);

  const LoadMore = () => {
    setPage(page + 1)
  };

  console.log(searchQuery)
  return (
    <div>
      <SearchBox
        onChange={filterSearch}
      />
      
      <MovieItem data={search} />
      <button onClick={LoadMore}> Load more</button>
      {/* <Outlet />
      <Casts/> */}
      {/* {searchQuery !== "" && <button onClick={LoadMore}> Load more</button>} */}
      
      
      <Suspense fallback={"Loading..."}> 
                <Outlet/>
            </Suspense>
    </div>
  )
}
