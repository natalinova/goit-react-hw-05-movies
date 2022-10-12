import React, { useEffect, useState } from 'react'
import { Search } from 'api/FetchConst';
import { useParams } from 'react-router-dom';
import FakeFace from "../api/fake_face.jpeg"
import {Item, ItemText, ListCasts} from "../MoviesStyled"

const imageUrl = 'https://image.tmdb.org/t/p/w500'

export default function Casts() {
    const { moviesId } = useParams();
    const [casts, setCasts] = useState([]);
    const fetchCasts = async (id, typeSearch) => { 
        try {   
            const searchResult = await Search(id, typeSearch);
            const data = searchResult.data.cast;
            setCasts(data);  
        }
        catch (error){         
        }
    }
    useEffect(() => {
        fetchCasts(moviesId, "/credits")
        // eslint-disable-next-line
    }, [moviesId])

    const markupCasts = casts.map(({ id, name, profile_path, character }) => {
        return <Item key={id}>
            <img src={(profile_path !== null) ? `${imageUrl}${profile_path}` : FakeFace } alt={name} width="240"/>
            <ItemText>Name:{name}</ItemText>
            <ItemText>Role:{character}</ItemText>
        </Item>
    })
    
        return (
            <ListCasts>
                {markupCasts}
    </ListCasts>
  )
   
}
