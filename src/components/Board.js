import React from 'react'
import { BtnWrap } from './BoardElements';
import Square from './Square'

class Board extends React.Component {

    renderSquare(i) {
        const isWinner = this.props.winnerArray[i];
        return (
            <Square isWinner={isWinner}
                value={this.props.squares[i]} 
                onClick={() => this.props.onClick(i)} /> 
        );
    }

    render() {

        return(
            <>
                <BtnWrap>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </BtnWrap>
                <BtnWrap>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </BtnWrap>
                <BtnWrap>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </BtnWrap>
            </>
        );
    }
}

export default Board
