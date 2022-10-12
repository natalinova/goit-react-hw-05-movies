import React, { useEffect, useState } from 'react'
import { Search } from 'api/FetchConst';
import { useParams } from 'react-router-dom';
import Error from "./Error"
import FakeFace from "../api/fake_face.jpeg"
import { ItemText,ItemReviews } from 'MoviesStyled';
const imageUrl = 'https://image.tmdb.org/t/p/w500'

export default function Reviews() {
  const { moviesId } = useParams();
  const [review, setReview] = useState([]);
  const [error, setError] = useState(null)
  const fetchReviews = async (id, typeSearch) => {
    try {
      const searchResult = await Search(id, typeSearch);
      const data = searchResult.data.results;
      if (data.length === 0) {
        setError(`Not any reviews for this movie`)
        return
      }
      else {
        setError(null)
      }
       setReview(data);
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
      {(author_details.avatar_path !== null) ?
        < img src={(author_details.avatar_path.includes('gravatar')) ? author_details.avatar_path.slice(1) : `${imageUrl}${author_details.avatar_path}`} alt={author} width="80" />
        : <img src={FakeFace} alt={author} width="80" />}
      
      <ItemText>{content}</ItemText>
    </ItemReviews>
  })
  return error === null ? <ul>
    {movieReviews}
  </ul> : <Error message={error} />
   
}

