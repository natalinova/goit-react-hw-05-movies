import axios from 'axios';

const Search = async (query) => {
  
    const result = await axios.get(`https://api.themoviedb.org/3/movie/${query}?api_key=575a9af20b08903ff7761ed5bfc17287`)
  
  console.log(query)
  console.log(result)
    if (result.length === 0) {
        return Promise.reject(new Error(` Not any movies with key word ${query}`))
    }
    
        return result
}

 const fetchImage = async (query) => {
       
        try {   
         
            const searchResult = await Search(query);
           
          
          return Promise.resolve(searchResult.data.results)
          
        }

        catch (error){
        
          // setError(`Not any images with key word ${query}` )          
  }
 }
export default fetchImage