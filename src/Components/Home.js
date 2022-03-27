import React, { useEffect } from 'react'
import Styled from 'styled-components'
import ImageSlide from './ImageSlide'
import Viewers from './Viewers'
import Movies from './Movies'
import { useDispatch } from 'react-redux'
import { setMovies } from '../features/movie/moviesSlice'

// import { db } from '../firebase'
function Home() {
    const dispatch = useDispatch();

    const fetchMoviesJSON = async () => {
        const response = await fetch('/DisneyPlusMovieData.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        let tempMovies = await response.json();
        dispatch(setMovies(tempMovies));



    }

    useEffect(() => {

        fetchMoviesJSON();



        // dispatch(setMovies())
        // db.collection("movies").onSnapshot((snapshot) => {
        //     console.log(snapshot);
        //     let tempMovies = snapshot.docs.map((doc) => {
        //         console.log(doc.data)
        //         return { id: doc.id, ...doc.data() }
        //     })
        // })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <Container>
            <ImageSlide />
            <Viewers />
            <Movies />
        </Container>
    )
}

export default Home

const Container = Styled.main`
    min-height:calc(100vh - 70px);
    padding:0 calc(3.5vw - 5px);
    position: relative;
    overflow-x:hidden;
    &:before{
        background: url("/images/home-background.png") no-repeat fixed center  center/cover ;
        content:"";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1
        
    }
    
`
