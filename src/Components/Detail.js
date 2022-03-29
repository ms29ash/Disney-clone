import React, { useEffect } from 'react'
import Styled from 'styled-components'
import { useParams } from 'react-router-dom'

function Detail() {
    const { id } = useParams();

    useEffect(() => {
        //Grab the movie info from db

    }, [])
    return (
        <Container>
            <Background>
                <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6385/656385-h" alt="" />
            </Background>
            <ImageTitle>
                <img src="/images/Pixar-Bao-Logo.png" alt="" />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" alt="" />
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" alt="" />
                    <span>TRAILER</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" alt="" />
                </GroupWatchButton>


            </Controls>
            <SubTitle>
                7 min &bull; 2018 &bull; Animation &bull; U &bull; English
            </SubTitle>
            <Description>
                An ageing Chinese mom gets another chance at motherhood when one of her dumplings springs to life as a lively, giggly dumpling boy.
            </Description>
        </Container>
    )
}

export default Detail

const Container = Styled.div`
min-height:calc(100vh - 70px);
padding:calc(3.5vw - 5px);
position: relative;
`

const Background = Styled.div`

    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index:-1;
    opacity:0.8;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }

`
const ImageTitle = Styled.div`
height:30vh;
width:35vw;
min-height:170px;
min-width:200px;
img{
    width:100%;
    height:100%;
    object-fit:contain;
}
`

const Controls = Styled.div`
display:flex;
align-items:center;

`

const PlayButton = Styled.button`
height:56px;
background-color:rgb(249,249 ,249);
padding:0px 24px;
margin-right:24.2px;
border:none;
border-radius:4px;
font-size:15px;
display:flex;
align-items:center;
letter-spacing:1.8px;
cursor:pointer;

&:hover{
    background-color:rgb(198,198,198);
}
`
const TrailerButton = Styled(PlayButton)`
background-color:rgb(0, 0, 0 ,0.3);
border:1px solid rgb(249,249 ,249);
text-transform: uppercase;
color:rgb(249,249,249);
&:hover{
    background-color:rgb(0,0,0,0.6);
}
`
const AddButton = Styled.button`
width:44px;
height:44px;
display:flex;
align-items: center;
justify-content: center; 
border-radius: 50%;
border:2px solid white;
background-color:rgb(0,0,0,0.8);
cursor:pointer;
margin-right:16px;
span{
    font-size: 30px;
    color:white;
}

`
const GroupWatchButton = Styled(AddButton)`
background-color:rgb(0,0,0)

`

const SubTitle = Styled.div`
color:rgb(249,249 ,249);
font-sizw:15px;
min-height:20px;
margin-top:26px;
`

const Description = Styled.div`
line-height:1.4;
font-size:20px;
margin-top:16px;
color:rgb(249,249 ,249);
max-width:700px;
`
