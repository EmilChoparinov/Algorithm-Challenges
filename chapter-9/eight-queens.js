function nQueens(n, board = new Board(), col = 0) {
    if (col >= board.cols) return true;
    for (let i = 0; i < board.rows; i++) {
        if (isValid(new BoardLocation(i, col), board)) {
            board.chessboard[i][col] = 1;
            if (nQueens(n, board, col + 1)) {
                return true;
            }
            board.chessboard[i][col] = 0;
        }
    }
    return false;
}

function isValid(checkingLocation, board) {
    if (checkingLocation instanceof BoardLocation && board instanceof Board) {
        //checking to all columns on the same row left of check
        for (let i = 0; i < board.cols; i++) if (board.chessboard[checkingLocation.row][i] == 1) return false;

        //checking all spaces upper diagonal
        let r = checkingLocation.row;
        let c = checkingLocation.col;
        while (c >= 0 && r >= 0) {
            if (board.chessboard[r][c] == 1) return false;
            r--;
            c--;
        }

        //checking all spaces lower diagonal
        r = checkingLocation.row;
        c = checkingLocation.col;
        while (c >= 0 && r < board.rows) {
            if (board.chessboard[r][c] == 1) return false;
            r++;
            c--;
        }
        return true;
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

class Board {
    constructor(rowSize, colSize) {
        if (!(rowSize && colSize)) {
            this.chessboard = [];
            this.rows = 8;
            this.cols = 8;
            for (let i = 0; i < 8; i++) {
                let curRow = [];
                for (let j = 0; j < 8; j++) {
                    curRow.push(0);
                }
                this.chessboard.push(curRow);
            }
        } else {
            if (typeof rowSize == 'number' && typeof colSize == 'number') {
                this.chessboard = [];
                this.rows = rowSize;
                this.cols = colSize;
                for (let i = 0; i < rowSize; i++) {
                    let curRow = [];
                    for (let j = 0; j < colSize; j++) {
                        curRow.push(0);
                    }
                    this.chessboard.push(curRow);
                }
            }
        }
    }

    toString() {
        let s = "";
        for (let i = 0; i < this.chessboard.length; i++) {
            for (let j = 0; j < this.chessboard[i].length; j++) {
                s += this.chessboard[i][j] + "  ";
            }
            s += "\n";
        }
        return s;
    }
}

//just a wrapper from n-queens solution
function eightQueens() {
    let board = new Board();
    nQueens(8, board);
    return board;
}

console.log(eightQueens());