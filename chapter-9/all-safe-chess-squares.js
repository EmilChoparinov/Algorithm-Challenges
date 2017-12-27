function allSafeChessSquares(queens, i = 0, board = new ChessBoard()) {
    if (queens instanceof Array) {
        if (i > queens.length) return;
        let queen = queens[i];
        if (queen instanceof ChessPiece) {
            board.showValidMovesQueen(queen);
            allSafeChessSquares(queens, i + 1, board);
        }
        return board;
    }
}

class ChessBoard {
    constructor() {
        this.chessboard = [];
        for (let i = 0; i < 8; i++) {
            let curRow = [];
            for (let j = 0; j < 8; j++) {
                curRow.push(1);
            }
            this.chessboard.push(curRow);
        }
    }

    showValidMovesQueen(queen, row = 0, col = 0) {
        if (row > 7 || col > 7) return;
        if (!this.isValidMoveQueen(queen, new BoardLocation(row, col))) this.chessboard[row][col] = 0;
        if (row <= 7) this.showValidMovesQueen(queen, row + 1, col);
        if (col <= 7) this.showValidMovesQueen(queen, row, col + 1);
    }

    isValidMoveQueen(queen, location) {
        if (queen instanceof ChessPiece && location instanceof BoardLocation) {
            if (queen.col === location.col) return false;
            if (queen.row === location.row) return false;
            if (Math.abs(queen.col - location.col) === Math.abs(queen.row - location.row)) return false;
            return true;
        }
        return false;
    }
}

class ChessPiece {
    constructor(row, col) {
        if (typeof row == 'number' && typeof col == 'number') {
            this.location = new BoardLocation(row, col);
            this.row = this.location.row;
            this.col = this.location.col;
        }
    }
}

class BoardLocation {
    constructor(row, col) {
        if (typeof row == 'number' && typeof col == 'number') {
            this.row = row;
            this.col = col;
        }
    }
}

let queens = [
    new ChessPiece(1, 1),
    new ChessPiece(3, 6),
    new ChessPiece(6, 3),
]

console.log(allSafeChessSquares(queens));