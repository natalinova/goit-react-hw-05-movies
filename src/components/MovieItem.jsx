import React from 'react';
import { useLocation} from 'react-router-dom';
import { List, Item, ItemTitle, LinkItem, ItemText } from '../MoviesStyled';
import NoPoster from "../api/no_poster.jpeg";
const imageUrl = 'https://image.tmdb.org/t/p/w500';

export default function MovieItem({ data }) {
  const location = useLocation();
   const listMovie =  data.map(({id, poster_path, title, release_date}) => {
     return <Item key={id}> <LinkItem to={`/movies/${id}`} state={{from: location}}>
     <img src={(poster_path !== null) ? `${imageUrl}${poster_path}` : NoPoster} alt={title} width="400"/>
       <ItemTitle>{title}</ItemTitle>
       <ItemText> Release date:{ release_date}</ItemText>
     </LinkItem>
            
        </Item>
   }
   )
  return (
          <List>
          {listMovie}
    </List>
  )
}
