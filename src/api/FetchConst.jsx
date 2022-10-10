import axios from 'axios';

export const SearchCasts = async (id) => {
  
    const result = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=575a9af20b08903ff7761ed5bfc17287`)
  
//   console.log(query)
//   console.log(result)
    if (result.length === 0) {
        return Promise.reject(new Error(` Not any movies with key word ${id}`))
    }
    
        return result
}

// export const fetchCasts = async (id) => { 
//         try {   
//           const searchResult = await SearchCasts(page);
//         const data = searchResult.data.results
//         setCasts([...casts, ...data])
          
       
//         }
//         catch (error){
        
            
//   }
//   }

 
// export default fetchImage