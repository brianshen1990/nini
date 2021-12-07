import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TTTCell from './TTTCell';

const useStyles = () => ({
  boardStyles: {
    // border: 'black 1px solid',
    display: 'grid',
    gridTemplateColumns: 'min-content min-content min-content',
    '> div': {
      width: 36,
      height: 36,
      border: 'black 1px solid',
      textAlign: 'center'
    }
  }
});

export default function TTTBoard({}) {
  // 0 => not filled
  // 1 => X
  // -1 => O
  const [cells, setCells] = useState(new Array(9).fill(0));
  const [player, setPlayer] = useState(1);
  const [winner, setWinner] = useState(0);
  const { boardStyles } = useStyles();

  // return -1, 0, 1
  const heleprCheckWin = nextCells => {
    //  ooo xxx
    // row
    for (let row = 0; row < 3; row++) {
      if (
        nextCells[row + 0] !== 0
        && nextCells[row + 0] === nextCells[row + 1]
        && nextCells[row + 0] === nextCells[row + 2]
      ) {
        return nextCells[row + 0];
      }
    }

    // col
    for (let col = 0; col < 3; col++) {
      if (
        nextCells[col + 0] !== 0
        && nextCells[col + 0] === nextCells[col + 3]
        && nextCells[col + 0] === nextCells[col + 6]
      ) {
        return nextCells[col + 0];
      }
    }

    if (
      nextCells[0] !== 0 &&
      nextCells[0] === nextCells[4] &&
      nextCells[0] === nextCells[8]
    ) {
      return nextCells[0];
    }
    if (
      nextCells[2] !== 0 &&
      nextCells[2] === nextCells[4] &&
      nextCells[2] === nextCells[6]
    ) {
      return nextCells[2];
    }
    return 0;
  };

  return (
    <>
      {`Current Player: ${player === 1 ? 'X' : 'O'}`}
      <div css={boardStyles}>
        {cells.map((cell, index) => (
          <TTTCell
            value={cell}
            index={index}
            onClick={id => {
              if (cells[id] !== 0) {
                return;
              }
              if (winner !== 0) {
                return;
              }
              const nextCells = [
                ...cells.slice(0, index),
                player,
                ...cells.slice(index + 1)
              ];
              const winnerCheckResult = heleprCheckWin(nextCells);
              if (winnerCheckResult !== 0) {
                setWinner(winnerCheckResult);
              }

              setCells(nextCells);
              setPlayer(-player);
            }}
          />
        ))}
      </div>
      {winner && `congras ${winner > 0 ? 'X' : '0'}, you just won the game!`}
    </>
  );
}

TTTBoard.propTypes = {};
