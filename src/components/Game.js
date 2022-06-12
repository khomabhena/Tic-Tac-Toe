import React from 'react'
import Board from './Board';
import { BoardWrap, GameWrap, InfoWrap, ListBtn, OrderedList, Status } from './GameElements';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            stepNumber: 0,
            xIsNext: true
        } 
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        if (this.calculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        });

    }

    getWinnerSquares(squares) {
        const lines = [
            [0, 1, 2],
            [0, 4, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 4, 6],
            [2, 5, 8],
            [3, 4, 5],
            [6, 7, 8]
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                
                if (squares[a] !== null && squares[b] !== null && squares[c] !== null) {
                    const array = Array(9).fill(false);
                    array[a] = true;
                    array[b] = true;
                    array[c] = true;
                 
                    return array;
                }
            }
        }

        return null;
    }

    calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [0, 4, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 4, 6],
            [2, 5, 8],
            [3, 4, 5],
            [6, 7, 8]
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                
                return squares[a];
            }
        }

        return null;
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = this.calculateWinner(current.squares);
        var winnerArray = Array(9).fill(false);

        const moves = history.map((step, move) => {
            const desc = move ? 'Go to move # ' + move : 
                'Go to game start';

            return(
                <li key={move}>
                    <ListBtn onClick={() => 
                        this.jumpTo(move)}>{desc}</ListBtn>
                </li>
            );
        });
        
        let status;
        if (winner) {
            status = 'Game Winner: ' + (winner);
            winnerArray = this.getWinnerSquares(current.squares);
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <GameWrap>
                <BoardWrap>
                    <Board 
                        winnerArray={winnerArray}
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)} />
                </BoardWrap>
                <InfoWrap>
                    <Status>{status}</Status>
                    <OrderedList>{moves}</OrderedList>
                </InfoWrap>
            </GameWrap>
        );
    }
}

export default Game
