import React from 'react'
import Styled from 'styled-components'
import ImageSlide from './ImageSlide'
import Viewers from './Viewers'

function Home() {
    return (
        <Container>
            <ImageSlide />
            <Viewers />
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
