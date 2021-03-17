import React from "react";
import styled from "styled-components";
import { GiMountainCave } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";

import { LargeText } from "../components/LargeText";

const Container = styled.div`
    display: flex;
    background-color: black;
    height: 10rem;
    position: fixed;
    width: 100%;
    z-index: 10;
`;
const LogoContainer = styled.div`
    height: 15.7rem;
    width: 15.8rem;
    background-color: #ff2929;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-left: 4.5rem;
`;

const LinkContainer = styled.div`
    width: 100%;
    /* background-color: blue; */
    display: flex;
    justify-content: flex-end;
    align-items: center;
    a:last-child {
        padding-right: 5rem;
        margin: 0 0;
        display: flex;
        align-items: center;
        color: #ff2929;
        :hover {
            color: white;
        }
        svg {
            margin-right: 1.2rem;
        }
    }
`;

const Link = styled.a`
    text-decoration: none;
    color: white;
    font-size: 1.7rem;
    cursor: pointer;
    :hover {
        color: #ff2929;
    }
    margin: 0 3rem 0 0;
`;

const Header = () => {
    return (
        <>
            <Container>
                <LogoContainer>
                    <GiMountainCave size={100} />
                    <LargeText size={1.7}>Mount sleet</LargeText>
                    <LargeText size={1.5} weight={400}>
                        Winter Tours
                    </LargeText>
                </LogoContainer>
                <LinkContainer>
                    <Link>Home</Link>
                    <Link> Trails</Link>
                    <Link> News</Link>
                    <Link>Contact</Link>
                    <Link>
                        <FaUserCircle size={20} />
                        Login
                    </Link>
                </LinkContainer>
            </Container>
        </>
    );
};

export default Header;
