import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Styled from 'styled-components'

function ImageSlide() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slideToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    }
    return (
        <Carousel {...settings}>
            <Wrap>
                <img src="/images/slider-badging.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/slider-badag.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/slider-scale.jpg" alt="" />
            </Wrap>
            <Wrap>
                <img src="/images/slider-scales.jpg" alt="" />
            </Wrap>

        </Carousel>
    )
}

export default ImageSlide

const Carousel = Styled(Slider)`
margin-top:20px;

ul li button{
    &:before{
        font-size:10px;
        color:rgb( 150 ,158,171);
    }
}

.slick-dots li.slick-active button:before{
    color:white;
}
.slick-list{
    overflow:visible;
}
button {
    z-index: 1;
}


`

const Wrap = Styled.div`
img{
    width:100%;
    height:100%;
    border-radius:4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px , rgb(0 0 0 / 73%) 0px 16px 10px -10px ;
    border:4px solid transparent;
    cursor:pointer;
    transition-duration:300ms;
    &:hover{
        border:4px solid rgb(249 ,249 ,249 ,0.8);
    }
}`
