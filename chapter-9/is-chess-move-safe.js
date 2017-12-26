function isChessMoveSafe(toWhere, enemyQueen) {
    if (toWhere instanceof BoardLocation && enemyQueen instanceof ChessPiece) {
        if (toWhere.col === enemyQueen.col) return false;
        if (toWhere.row == enemyQueen.row) return false;
        if (Math.abs(toWhere.col - enemyQueen.col) === Math.abs(toWhere.row - enemyQueen.row)) {
            return false;
        }
        return true
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

console.log(isChessMoveSafe(new BoardLocation(1, 4), new ChessPiece(4, 4)));
console.log(isChessMoveSafe(new BoardLocation(1, 3), new ChessPiece(4, 4)));
console.log(isChessMoveSafe(new BoardLocation(2, 2), new ChessPiece(4, 4)));