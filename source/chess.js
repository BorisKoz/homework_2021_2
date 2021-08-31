'use strict';

/**
 * Создать шахматную доску
 * @param {(string|number)} boardSize размер доски
 * @returns {(string|null)} возвращает шахматную доску NxN
 */
var chess = (boardSize) => {
    if (!Number.isInteger(+boardSize) || boardSize <= 1)
        return null;
    
    const symbols = {
        star: '*',
        space: ' ',
    };
    //переменная boardStrings - 2 первые строки доски, их потом просто надо размножить. Сложность тем самым 2n
    const boardStrings = ['', ''];
    
    for (let i = 0; i < boardSize; i++) {
        const isEven = i % 2;
        boardStrings[0] = `${boardStrings[0]}${symbols[(isEven)?'space':'star']}`;
        boardStrings[1] = `${boardStrings[1]}${symbols[(isEven)?'star':'space']}`;
    }
    boardStrings = boardStrings.map(item => `${item}\n`);
    
    // увеличиваем количество строк
    for (let i = 0; i < boardSize - 2; i++) {
        boardStrings.push(boardStrings[i]);
    }
    return boardStrings.reduce((board, cur) => `${board}${cur}`);
};
