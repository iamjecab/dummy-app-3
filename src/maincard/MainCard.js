import React from "react";
import styled from "styled-components";
import Btn from "../components/Button";

import { LargeText } from "../components/LargeText";
import { SmallText } from "../components/SmallText";

const Wrapper = styled.div`
    margin: 0 10% 0 10%;
    /* width: 100%; */
    height: 60vh;
    display: flex;
`;

const ImgWrapper = styled.div`
    /* width: 100%; */
`;

const InfoContainer = styled.div`
    width: 100%;
    height: 60rem;
    background-color: black;
    padding: 8rem 8rem 0 15rem;
`;

const Pricing = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    padding: 2rem 0 5rem 2rem;
    .Three,
    .Four {
        padding-left: 10rem;
    }
`;

const Button = styled(Btn)``;

const MainCard = () => {
    return (
        <>
            <Wrapper>
                <ImgWrapper>
                    <img
                        src="https://source.unsplash.com/450x600/?hike"
                        alt="hike"
                    />
                </ImgWrapper>
                <InfoContainer>
                    <LargeText size={4} color="white">
                        Our Trails
                    </LargeText>
                    <Pricing>
                        <SmallText size={2.4} color="white">
                            Half Day Snowshoe
                        </SmallText>

                        <SmallText size={1.6} color="white">
                            Offered Daily $80
                        </SmallText>
                        <Button>Book Now</Button>
                    </Pricing>

                    <Pricing>
                        <SmallText size={2.4} color="white">
                            Full Day Snowshoe
                        </SmallText>

                        <SmallText size={1.6} color="white">
                            Offered Daily $120
                        </SmallText>
                        <Button>Book Now</Button>
                    </Pricing>

                    <Pricing>
                        <SmallText size={2.4} color="white">
                            Winter Walk
                        </SmallText>

                        <SmallText size={1.6} color="white" className="Three">
                            Offered Daily $40
                        </SmallText>
                        <Button>Book Now</Button>
                    </Pricing>

                    <Pricing>
                        <SmallText size={2.4} color="white">
                            Ski Tour
                        </SmallText>

                        <SmallText size={1.6} color="white" className="Four">
                            Offered Daily $120
                        </SmallText>
                        <Button>Book Now</Button>
                    </Pricing>
                </InfoContainer>
            </Wrapper>
        </>
    );
};

export default MainCard;
