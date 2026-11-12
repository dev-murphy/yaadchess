import type { Piece, PieceTheme } from "~/types";

export function getPieceImage(piece: Piece, theme: PieceTheme) {
  return `/pieces/${theme}/${piece.color}/${piece.type}.png`;
}