import { defineStore } from "pinia";
import { type SquareInfo, PieceMap, PieceColor, type Piece, type PieceLetter } from "~/types";

export const useAppStore = defineStore("app", {
  state: () => ({
    name: "Yaad Chess",
    lightColor: "#EBECD0",
    darkColor: "#779556",
    board: Array.from({ length: 8 }, () =>
      Array(8).fill({
        color: "",
        piece: null,
      }),
    ) satisfies SquareInfo[][],
  }),
  actions: {
    initBoard() {
      for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
          this.board[row][col] = {
            color: (row + col) % 2 === 0 ? this.lightColor : this.darkColor,
            piece: null,
          };
        }
      }

      this.fen("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1");
    },
    fen(notation: string) {
      const segments = notation.split(" ");
      let boardState = segments[0];

      let position = 1;
      for (let i = 0; i < boardState.length; i++) {
        if (boardState.charAt(i) == "/") {
          continue;
        }

        if (/\d/.test(boardState.charAt(i))) {
          position += Number(boardState.charAt(i));
        } else {
          const { row, col } = this.positionToCoords(position - 1);
          this.board[row][col] = {
            ...this.board[row][col],
            piece: this.getPiece(boardState.charAt(i) as PieceLetter),
          };
          position++;
        }
      }
    },
    getPiece(pieceLetter: string): Piece {
      const formattedLetter = pieceLetter.toLowerCase() as PieceLetter;
      let defaultOptions = {
        type: PieceMap[formattedLetter],
        color: PieceColor.BLACK,
      };

      if (/[A-Z]/.test(pieceLetter)) {
        defaultOptions = {
          ...defaultOptions,
          color: PieceColor.WHITE,
        };
      }

      return defaultOptions;
    },
    positionToCoords(position: number) {
      return {
        row: Math.floor(position / 8),
        col: position % 8,
      };
    },
  },
});
