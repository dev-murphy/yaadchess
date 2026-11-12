import { defineStore } from "pinia";
import { type SquareInfo, PieceType, PieceColor } from "~/types";

export const useAppStore = defineStore("app", {
  state: () => ({
    name: "Yaad Chess",
    lightColor: "#EBECD0",
    darkColor: "#779556",
    board: Array.from({ length: 8 }, () => Array(8).fill({
      color: "",
      piece: null
    })) satisfies SquareInfo[][]
  }),
  actions: {
    initBoard() {
      for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {

          if (row === 0 && col === 0) {
            this.board[row][col] = {
              color: (row + col) % 2 === 0 ? this.lightColor : this.darkColor,
              piece: { color: PieceColor.BLACK, type: PieceType.KING}
            };
          } else {  
          this.board[row][col] = {
            color: (row + col) % 2 === 0 ? this.lightColor : this.darkColor,
            piece: null
          };
          }
        }
      }
    }
  }
})