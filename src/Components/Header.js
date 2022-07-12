import React from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Nav>
      <Logo
        src="/images/logo.svg"
        alt=""
      />
      <NavMenu>
        <LinkTo to='/' >
          <img src="/images/home-icon.svg" alt="" />
          <span>HOME</span>
        </LinkTo>
        <a >
          <img src="/images/search-icon.svg" alt="" />
          <span>SEARCH</span>
        </a>
        <a >
          <img src="/images/watchlist-icon.svg" alt="" />
          <span>WATCHLIST</span>
        </a>
        <a >
          <img src="/images/original-icon.svg" alt="" />
          <span>ORIGINALS</span>
        </a>
        <a >
          <img src="/images/movie-icon.svg" alt="" />
          <span>MOVIES</span>
        </a>

        <a >
          <img src="/images/series-icon.svg" alt="" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src="/images/user-img.jpg" />
    </Nav>
  );
}

export default Header;

const Nav = Styled.nav`

height: 70px;
color:white;
background:#090b13;
display: flex;
align-items: center;
padding:0 36px;
overflow-x:hidden;
`;

const Logo = Styled.img`
width:80px;

`;

const NavMenu = Styled.div`
display: flex;
flex:1;
margin-left:20px;
align-items: center;
a{
  display: flex;
  align-items: center;
  padding:0 12px;
  cursor:pointer;
  img{
    height:20px;
  }
  span{
    font-size: 13px;
    letter-spacing:1.42px;
    position: relative;
    &:after{
      content: "";
      height:2px;
      background: white;
      position: absolute;
      /* top: 0; */
      left: 0;
      right: 0;
      bottom:-6px;
      opacity: 0;
      transform:scaleX(0);
      transform-origin:left center;
      transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;

    }
  }
  &:hover{
    span:after{
      opacity:1;
      transform: scaleX(1)
    }
  }
}
`;
const UserImg = Styled.img`
width:48px;
height:48px;
border-radius: 100%;
cursor:pointer;

`;

const LinkTo = Styled(Link)`
color:white;
text-decoration:none;
`
