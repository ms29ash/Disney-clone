import React from 'react'
import Styled from 'styled-components'

function Login() {
    return (
        <Container>
            <CTA>
                <CTALogo1 src="/images/cta-logo-one.svg" alt="" />

                <SignUp>
                    Get All There
                </SignUp>
                <Description>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis beatae impedit assumenda et repudiandae? Ullam accusantium alias velit, sit odit officiis reprehenderit autem placeat fugiat.
                </Description>
                <CTALogo2 src="/images/cta-logo-two.png" />



            </CTA>
        </Container>
    )
}

export default Login


const Container = Styled.div`
position: relative;
height:calc(100vh - 70px);
display: flex;
align-items: top;
justify-content: center;

&:after{
    content: "";
    background:url("/images/login-background.jpg") no-repeat top center/cover fixed;
    position:absolute;
    bottom:0;
    top:0;
    left:0;
    bottom:0;
    right:0;
    opacity: 0.7;
    z-index: -1;
}
`

const CTA = Styled.div`
max-width: 650px;
padding:80px 40px;
width:80%;
display:flex;
flex-direction: column;
margin-top:75px;
align-items: center;

`

const CTALogo1 = Styled.img``

const SignUp = Styled.a`
width:100%;
background-color:#0063e5;
font-weight:bold;
padding:17px 0;
color:#f9f9f9;
border-radius:4px;
text-align:center;
text-transform:uppercase;
font-size:18px;
cursor:pointer;
transition:all 250ms ;
letter-spacing:1.5px;
margin-top:8px;
margin-bottom:8px;
&:hover{
    background-color: #0483ee;
}
`
const Description = Styled.p`
font-size:11px;
letter-spacing:1.5px;
text-align: center;
line-height:1.5;
`;

const CTALogo2 = Styled.img`
width:90%;`