import React, { useEffect, useState } from 'react'
import { Search } from 'api/FetchConst';
import { useParams } from 'react-router-dom';
import Error from "./Error"
import FakeFace from "../api/fake_face.jpeg"
import { ItemText,ItemReviews } from 'MoviesStyled';
const imageUrl = 'https://image.tmdb.org/t/p/w500'

export default function Reviews() {
  const { moviesId } = useParams();
    
  console.log(moviesId)
  const [review, setReview] = useState([]);
  const [error, setError] = useState(null)
  const fetchReviews = async (id, typeSearch) => {
    try {
      const searchResult = await Search(id, typeSearch);
      console.log(searchResult)
      const data = searchResult.data.results;
      console.log(data);
      setReview(data);
      console.log(review);
      if (data.length === 0) {
        setError(`Not any reviews for this movie`)
      }
      else {
        setError(null)
      }
    }
    catch (error) {
  
    }
  }

    
  useEffect(() => {
    fetchReviews(moviesId, "/reviews")
    // eslint-disable-next-line
  }, [moviesId])
  
  const movieReviews = review.map(({ id, author, author_details, content }) => {
    return <ItemReviews key={id}>
      <h3> {author}</h3>
      {(author_details.avatar_path.includes("gravatar")) ? < img src={author_details.avatar_path.slice(1)} alt={author} width="80" /> : (<img src={(author_details.avatar_path !== null) ? `${imageUrl}${author_details.avatar_path}` : FakeFace} alt={author} width="80" />)}
      
      <ItemText>{content}</ItemText>
    </ItemReviews>
  })
  return error === null ? <ul>
    {movieReviews}
  </ul> : <Error message={error} />
   
}

