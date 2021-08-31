'use strict';

/**
 * Создать шахматную доску
 * @param {(string|number)} boardSize размер доски
 * @returns {(string|null)} возвращает шахматную доску NxN
 */
let chess = (boardSize) => {
    if (!Number.isInteger(+boardSize) || boardSize <= 1)
        return null;
    
    const symbols = {star:'*', space:' '};
    //переменная boardStrings - 2 первые строки доски, их потом просто надо размножить. Сложность тем самым 2n
    let boardStrings = ['', ''];
    for (let i = 0; i < boardSize; i++) {
        boardStrings[0] = `${boardStrings[0]}${symbols[(i%2)?'space':'star']}`;
        boardStrings[1] = `${boardStrings[1]}${symbols[(i%2)?'star':'space']}`;
    }
    boardStrings = boardStrings.map(item => `${item}\n`);
    
    // увеличиваем количество строк
    for (let i = 0; i < boardSize - 2; i++) {
        boardStrings.push(boardStrings[i]);
    }
    return boardStrings.reduce((board, cur) => `${board}${cur}`);
};
