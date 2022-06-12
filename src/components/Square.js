import React from 'react'
import { SquareEl } from './SquareElements'

const Square = (props) => {
    const isWinner = props.isWinner;
    return (
        <SquareEl
            isWinner={isWinner}
            onClick={props.onClick}>
            {props.value}
        </SquareEl>
    )
}

export default Square