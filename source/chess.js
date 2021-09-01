'use strict';

/**
 * Создать шахматную доску
 * @param {(string|number)} boardSize размер доски
 * @returns {(string|null)} возвращает шахматную доску NxN
 */
const chess = (boardSize) => {
  if (!Number.isInteger(+boardSize) || boardSize <= 1) {
    return null;
  }
    
  let starsRow = new Array(+boardSize);
  starsRow.fill('*');
  let boardRow = starsRow.map((item, index) => (index%2)?' ':'*');
  
  // чтобы циклично крутить строку она должна быть четной
  if (boardSize%2) {
    boardRow[boardSize] = ' ';
  }
  
  let board = ''
  for (let i = 0; i < boardSize; i++) {
    if (boardSize%2){
      let buffer = boardRow.pop();
      board = `${board}${boardRow.join('')}\n`;
      boardRow[boardSize] = buffer;
    } else {
      board = `${board}${boardRow.join('')}\n`;
    }
    boardRow = boardRow.reverse();
  }
  return board;
};
