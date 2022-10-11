import axios from 'axios';

export const Search = async (id, typeSearch) => {
  
    const result = await axios.get(`https://api.themoviedb.org/3/movie/${id}${typeSearch
        }?api_key=575a9af20b08903ff7761ed5bfc17287`)
  
    if (result.length === 0) {
        return Promise.reject(new Error(` Not any movies with key word ${id}`))
    }
    
        return result
}

export const SearchHome = async (page) => {
  
    const resultHomepage = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=575a9af20b08903ff7761ed5bfc17287&page=${page}`)
  
  console.log(page)
  console.log(resultHomepage)
    if (resultHomepage.length === 0) {
        return Promise.reject(new Error(` Not any movies for your query`))
    }
        return resultHomepage
}

