import React from "react";
import styled from "styled-components";

import { LargeText } from "../components/LargeText";
import { SmallText } from "../components/SmallText";
import Btn from "../components/Button";

const HeroContainer = styled.div`
    width: 100%;
    height: 95vh;
    background-image: url("https://source.unsplash.com/1920x1080/?snow");
    background-position: center;
`;

const TextContainer = styled.div`
    padding: 25rem 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1:nth-child(1) {
        margin: 0 0 3rem 0;
    }
`;

const Button = styled(Btn)`
    padding: 1.1rem 1.8rem;
    margin: 4.3rem 0 0 0;
    border: none;
    outline: none;
    :hover {
        background-color: transparent;
        color: white;
        outline: 0.2rem solid white;
        font-weight: 700;
    }
`;

const Hero = () => {
    return (
        <>
            <HeroContainer>
                <TextContainer>
                    <LargeText size={6.5} color="white">
                        Welcome to Mount Sleet
                    </LargeText>
                    <SmallText size={1.7} color="white">
                        I'm a paragraph. Click here to add your own text and
                        edit me.
                    </SmallText>
                    <SmallText size={1.7} color="white">
                        It’s easy. Just click “Edit Text” or double click me to
                        add your
                    </SmallText>
                    <SmallText size={1.7} color="white">
                        own content and make changes to the font.{" "}
                    </SmallText>
                    <Button color="black" size={1.7}>
                        Book a Trail
                    </Button>
                </TextContainer>
            </HeroContainer>
        </>
    );
};

export default Hero;
