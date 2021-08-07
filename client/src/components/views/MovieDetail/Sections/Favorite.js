import React, { useState, useEffect } from 'react'
import Axios from 'axios';

function Favorite(props) {

    const movieId = props.movieId;
    const userFrom = props.userFrom;
    const movieTitle = props.movieInfo.title;
    const moviePost = props.movieInfo.backdrop_path;
    const movieRunTime = props.movieInfo.runtime;

    const [favoriteNumber, setFavoriteNumber] = useState(0)
    const [favorited, setFavorited] = useState(false)

    useEffect(() => {

        let variables = { // 받아올 정보들
            userFrom, 
            movieId
        }
    
        Axios.post('/api/favorite/favoriteNumber', variables)
        .then(response => {
            if(response.data.success) {
                setFavoriteNumber(response.data.favoriteNumber)
                console.log(response.data)
            } else {
                alert('숫자 정보를 가져오는데 실패 했습니다.')
            }
        })

        Axios.post('/api/favorite/favorited', variables)
        .then(response => {
            if(response.data.success) {
                setFavorited(response.data.favorited)
                console.log('favorited = ', response.data)
            } else {
                alert('정보를 가져오는데 실패 했습니다.')
            }
        })

    }, [])


    return (
        <div>
            <button>{favorited ? "Not Favorite" : "Add to Favorite"} {favoriteNumber} </button>
        </div>
    )
}

export default Favorite
