import axios from 'axios';

export const Search = async (typeSearch, id, typeComponents, typeQuery) => {
  
    const result = await axios.get(`https://api.themoviedb.org/3${typeSearch}/movie${id}${typeComponents}?api_key=575a9af20b08903ff7761ed5bfc17287${typeQuery}`)
  
    if (result.length === 0) {
        return Promise.reject(new Error(` Not any movies with key word ${id}`))
    }
    
        return result
}


