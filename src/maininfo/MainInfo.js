import React from "react";
import styled from "styled-components";
import { FaHiking, FaFirstAid } from "react-icons/fa";
import { GiPathDistance } from "react-icons/gi";
import { FiMap } from "react-icons/fi";

import { LargeText } from "../components/LargeText";
import { SmallText } from "../components/SmallText";
import Btn from "../components/Button";

const Wrapper = styled.div`
    margin: 5rem 20% 0rem 20%;
    text-align: center;
    h1 {
        margin-bottom: 2rem;
    }
    h3 {
        margin-bottom: 0.5rem;
    }
`;

const IconsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 11rem 0 9rem 0;
`;

const Icon = styled.div`
    h3 {
        padding-top: 2rem;
    }
`;

export const Button = styled(Btn)`
    border: none;
    outline: 0.1rem solid black;
    padding: 1.2rem 3rem;
    cursor: pointer;
    :hover {
        background-color: black;
        color: white;
    }
`;

const MainInfo = () => {
    return (
        <>
            <Wrapper>
                <LargeText size={5.5}>Make Winter Last Forever</LargeText>
                <SmallText size={1.6} weight={400}>
                    I'm a paragraph. Click here to add your own text and edit
                    me.
                </SmallText>

                <SmallText size={1.6} weight={400}>
                    It’s easy. Just click “Edit Text” or double click me to add
                    your
                </SmallText>

                <SmallText size={1.6} weight={400}>
                    own content and make changes to the font.
                </SmallText>
                <IconsWrapper>
                    <Icon>
                        <FaHiking size={80} color="#FF2929" />
                        <SmallText size={2.2} weight={400}>
                            Adventure
                        </SmallText>
                    </Icon>

                    <Icon>
                        <FaFirstAid size={80} color="#FF2929" />
                        <SmallText size={2.2} weight={400}>
                            Safety
                        </SmallText>
                    </Icon>
                    <Icon>
                        <GiPathDistance size={80} color="#FF2929" />
                        <SmallText size={2.2} weight={400}>
                            Memories
                        </SmallText>
                    </Icon>
                    <Icon>
                        <FiMap size={80} color="#FF2929" />
                        <SmallText size={2.2} weight={400}>
                            Experiences
                        </SmallText>
                    </Icon>
                </IconsWrapper>

                <Button size={1.7}>Learn More</Button>
            </Wrapper>
        </>
    );
};

export default MainInfo;
