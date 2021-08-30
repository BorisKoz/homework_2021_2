'use strict';

/**
 * Создать шахматную доску
 * @returns {String} возвращает шахматную доску NxN
 */

function chess(boardSize) {
    if (!Number.isInteger(+boardSize) || boardSize <= 1)
        return null;
    let board=''
    let symbols = ['*', ' ']
    let boardStrings = ['', '']
    for (let i=0; i < boardSize; i++) {
        boardStrings[0] += symbols[i%2]
        boardStrings[1] += symbols[1-i%2]
    }
    boardStrings = boardStrings.map(item => item + '\n')
    for (let i=0; i < boardSize; i++)
        board += boardStrings[i%2]
    return board;
}
