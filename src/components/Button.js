import React from "react";
import styled from "styled-components";

const Btn = styled.button`
    font-size: ${(props) => props.size}rem;
    color: ${(props) => props.color};
    font-weight: ${(props) => props.weight};
`;

export default Btn;
