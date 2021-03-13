import React from "react";
import styled from "styled-components";

const Text = styled.h1`
    font-size: ${(props) => props.size}rem;
    font-weight: ${(props) => props.weight};
    color: ${(props) => props.color};
`;

export const LargeText = (props) => {
    return (
        <>
            <Text size={props.size} weight={props.weight} color={props.color}>
                {props.children}
            </Text>
        </>
    );
};
