import styled from "styled-components";

export const SquareEl = styled.button`
    width: 70px;
    height: 70px;
    font-size: 1.2rem;
    font-weight: bold;
    border-radius: 12px;
    background-color: ${({isWinner}) => (isWinner == true ? 'red' : 'teal')};
    color: white;
    text-align: center;
    border: 0;
    margin: 4px;
    cursor: pointer;

    -ms-wrap-flow: both;
`