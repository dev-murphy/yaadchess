import type { Piece, PieceTheme } from "~/types";

export function getPieceImage(piece: Piece, theme: PieceTheme) {
  return `${import.meta.env.BASE_URL}pieces/${theme}/${piece.color}/${piece.type}.png`;
}
