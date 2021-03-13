import styled from "styled-components";
import React from "react";

const Text = styled.h3`
    font-size: ${(props) => props.size}rem;
    font-weight: ${(props) => props.weight};
    color: ${(props) => props.color};
`;

export const SmallText = (props) => {
    return (
        <>
            <Text size={props.size} weight={props.weight} color={props.color}>
                {props.children}
            </Text>
        </>
    );
};
