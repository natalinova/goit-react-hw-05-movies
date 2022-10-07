import React from 'react'
import fetchImage from '../api/fetcher'


export const Home = () => {
 
 fetchImage("popular").then(
    response => {
      console.log(response)
    const list = response.map(({ id, title}) => {return <li key={id}>
     {title}
     </li>
    })
      console.log(list)
     return list 
    }
 )
  
  // console.log(array)
  // const list = array.map(({ id, title}) => {
  //  return <li key={id}>
  //    {/* <img src={poster_path} alt={title}></img> */}
  //    <p> {title}</p>
  //    </li>
  //     })
 
  return (
    <ul>
        {/* сюди не можу вставити змінну */}
      {/* {list} */}
</ul>


  )
}
