export enum PieceTheme {
  THEME_1="001",
  THEME_2="002"
}

export enum PieceColor {
  BLACK="black",
  WHITE="white"
}

export const PieceMap = {
  k: "king",
  q: "queen",
  b: "bishop",
  n: "knight",
  r: "rook",
  p: "pawn"
} as const;

export type PieceLetter = keyof typeof PieceMap;
export type PieceType = (typeof PieceMap[keyof typeof PieceMap])

export type SquareInfo = {
  color: string;
  piece: Piece | null;
}

export type Piece = {
  color: PieceColor;
  type: PieceType;
}
