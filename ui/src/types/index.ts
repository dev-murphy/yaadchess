export enum PieceTheme {
  THEME_1="001",
  THEME_2="002"
}

export enum PieceColor {
  BLACK="black",
  WHITE="white"
}

export enum PieceType {
  KING="king",
  QUEEN="queen",
  BISHOP="bishop",
  KNIGHT="knight",
  PAWN="pawn"
}

export type SquareInfo = {
  color: string;
  piece: Piece | null;
}

export type Piece = {
  color: PieceColor;
  type: PieceType;
}
