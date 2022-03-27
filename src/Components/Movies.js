import React from 'react'
import Styled from 'styled-components'

function Movies() {
    return (
        <Container>
            <h4>Recommended for You</h4>
            <Content>
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/5048/1125048-h-65913c2f20f8" alt="" />
                </Wrap>
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/5048/1125048-h-65913c2f20f8" alt="" />
                </Wrap>
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/5048/1125048-h-65913c2f20f8" alt="" />
                </Wrap>
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/5048/1125048-h-65913c2f20f8" alt="" />
                </Wrap>
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/5048/1125048-h-65913c2f20f8" alt="" />
                </Wrap>
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/5048/1125048-h-65913c2f20f8" alt="" />
                </Wrap>
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/5048/1125048-h-65913c2f20f8" alt="" />
                </Wrap>
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1x/sources/r1/cms/prod/5048/1125048-h-65913c2f20f8" alt="" />
                </Wrap>

            </Content>
        </Container>
    )
}

export default Movies

const Container = Styled.div``

const Content = Styled.div`
display: grid;
grid-gap:25px;
grid-template-columns: repeat(4 , minmax( 0 , 1fr));
`

const Wrap = Styled.div`
border-radius:10px;
overflow:hidden;
border:3px solid rgb(249 , 249 , 249 , 0.1);
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px , rgb(0 0 0 / 73%) 0px 16px 10px -10px ;
cursor:pointer;
transition:all 250ms cubic-bezier(0.25 ,0.46,0.45,0.94) 0s;

img{
    width: 100%;
    height: 100%;
    object-fit:cover;
}
&:hover{
    transform: scale(1.05);
    border-color: rgb(249,249 ,249 ,0.8);
    box-shadow: rgb(0 0 0 / 69%) 0px 40px 58px -10px , rgb(0 0 0 / 73%) 0px 16px 10px -10px ;

}
`
