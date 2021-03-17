import React from "react";
import styled from "styled-components";
import {
    IoChatboxOutline,
    IoEyeOutline,
    IoHeartOutline,
} from "react-icons/io5";

import { LargeText } from "../components/LargeText";
import { SmallText } from "../components/SmallText";
import { Button } from "../maininfo/MainInfo";

const Backdrop = styled.div`
    width: 100%;
    height: 80vh;
    opacity: 0.17;
    background-image: url("https://source.unsplash.com/1920x1000/?snow");
    background-attachment: fixed;
    background-position: center;
    /* transform: translateY(25rem); */
`;

const Testimonial = styled.div`
    margin: 0 9% 0 9%;
    display: flex;
    text-align: center;
    transform: translateY(25rem);

    h1 {
        padding: 8% 0 3% 0;
    }

    h3 {
        margin-top: 2rem;
    }
    h3:last-child {
        margin-top: 5rem;
    }
`;

const Info = styled.div`
    background-color: black;
    width: 100%;
    /* display: flex; */
`;

const Container = styled.div`
    transform: translateY(-70%);
`;

const CardHeading = styled.div`
    text-align: center;
    h1 {
        padding-bottom: 2rem;
    }
`;

const CardWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const Card = styled.div`
    background-color: black;

    margin: 8rem 3rem 0 3rem;
    a {
        text-decoration: none;
    }
`;

const Icon = styled.div`
    display: flex;
    border-top: 0.1rem solid white;
    padding-top: 1rem;
    svg,
    span {
        cursor: pointer;
    }
`;

const TextWrapper = styled.div`
    color: white;
    padding: 1.5rem;

    span {
        font-size: 1.5rem;
        margin: 0 2.1rem 0.8rem 0.8rem;
    }
    h3 {
        margin-bottom: 1rem;
    }
`;

const News = () => {
    return (
        <>
            <Testimonial>
                <Info>
                    <LargeText size={5.5} color="white">
                        Peak Experiences
                    </LargeText>
                    <SmallText size={1.7} color="white" weight={400}>
                        “I'm a testimonial. Click to edit me and add text that
                        says <br /> something nice about you and your services.
                        Let your customers <br /> review you and tell their
                        friends how great you are.”
                    </SmallText>
                    <SmallText size={1.7} color="white" weight={400}>
                        Tom
                    </SmallText>
                </Info>
                <img
                    src="https://source.unsplash.com/500x480/?people"
                    alt="people"
                />
            </Testimonial>
            <Backdrop></Backdrop>
            <Container>
                <CardHeading>
                    <LargeText size={5.5} color="black">
                        Sleet News
                    </LargeText>
                    <SmallText size={1.7} color="black" weight={400}>
                        I'm a paragraph. Click here to add your own text and
                        edit me. <br /> It’s easy. Just click “Edit Text” or
                        double click me to add your <br /> own content and make
                        changes to the font.
                    </SmallText>
                </CardHeading>
                <CardWrapper>
                    <Card>
                        <img
                            src="https://source.unsplash.com/340x250/?snow"
                            alt="snow"
                        />
                        <TextWrapper>
                            <a href="#">
                                <SmallText size={1.8} color="white">
                                    How To Experience Winter <br /> Hike
                                    Virtually
                                </SmallText>
                            </a>
                            <Icon>
                                <IoEyeOutline size={20} color="white" />{" "}
                                <span>0</span>
                                <IoChatboxOutline
                                    size={20}
                                    color="white"
                                />{" "}
                                <span>0</span>
                                <IoHeartOutline size={20} color="red" />{" "}
                                <span>0</span>
                            </Icon>
                        </TextWrapper>
                    </Card>

                    <Card>
                        <img
                            src="https://source.unsplash.com/341x251/?snow"
                            alt="snow"
                        />
                        <TextWrapper>
                            <a href="#">
                                <SmallText size={1.8} color="white">
                                    Snow Wheather Report: <br /> December
                                </SmallText>
                            </a>
                            <Icon>
                                <IoEyeOutline size={20} color="white" />{" "}
                                <span>0</span>
                                <IoChatboxOutline
                                    size={20}
                                    color="white"
                                />{" "}
                                <span>0</span>
                                <IoHeartOutline size={20} color="red" />{" "}
                                <span>0</span>
                            </Icon>
                        </TextWrapper>
                    </Card>

                    <Card>
                        <img
                            src="https://source.unsplash.com/340x251/?snow"
                            alt="snow"
                        />
                        <TextWrapper>
                            <a href="#">
                                <SmallText size={1.8} color="white">
                                    Top Winter Navigation Tips
                                </SmallText>
                            </a>
                            <br />
                            <br />
                            <Icon>
                                <IoEyeOutline size={20} color="white" />
                                <span>0</span>
                                <IoChatboxOutline size={20} color="white" />
                                <span>0</span>
                                <IoHeartOutline size={20} color="red" />{" "}
                                <span>0</span>
                            </Icon>
                        </TextWrapper>
                    </Card>
                </CardWrapper>
            </Container>
        </>
    );
};

export default News;
