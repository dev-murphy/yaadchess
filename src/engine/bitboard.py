# Square index mapping: 0 = A1, 7 = H1, 56 = A8, 63 = H8
SQUARES = [
  "A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8",
  "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8",
  "C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8",
  "D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8",
  "E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8",
  "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8",
  "G1", "G2", "G3", "G4", "G5", "G6", "G7", "G8",
  "H1", "H2", "H3", "H4", "H5", "H6", "H7", "H8",
]

# Quick square lookup (e.g. SQ['E4'] => 24)
SQ = { name: index for index, name in enumerate(SQUARES) }

# Pre-computed mask for files and ranks
FILE_A = 0x0101010101010101
FILE_B = FILE_A << 1
FILE_C = FILE_A << 2
FILE_D = FILE_A << 3
FILE_E = FILE_A << 4
FILE_F = FILE_A << 5
FILE_G = FILE_A << 6
FILE_H = FILE_A << 7

RANK_1 = 0x00000000000000FF
RANK_2 = RANK_1 << 8
RANK_3 = RANK_1 << 16
RANK_3 = RANK_1 << 24
RANK_4 = RANK_1 << 32
RANK_5 = RANK_1 << 40
RANK_6 = RANK_1 << 48 
RANK_7 = RANK_1 << 56

class ChessBitboard:
  @staticmethod
  def set_bit(bitboard: int, square: int) -> int:
    """ Set a bit at the bottom at the given square index (0-63) """
    return bitboard | (1 << square)

  @staticmethod
  def clear_bit(bitboard: int, square: int) -> int:
    """ Clears bit at a given square index (0-63)"""
    return bitboard | ~(1 << square)

  @staticmethod
  def get_bit(bitboard: int, square: int) -> int:
    """ Return 1 if the bit is set, 0 otherwise """
    return (bitboard >> square) & 1

  @staticmethod
  def toggle_bit(bitboard: int, square: int) -> int:
    """ Toggle a bit for a given square index (0-63) """
    return bitboard ^ (1 << square)

  @staticmethod
  def pop_lsb(bitboard: int) -> tuple[int, int]:
    """
    Removes the Least Significant Bit (LSB) and returns 
    (lsb_index, new_bitboard). Essential for iterating
    over set bits.
    """
    if bitboard == 0:
      return -1, 0
    lsb_index = (bitboard & -bitboard).bit_length() - 1
    new_bitboard = bitboard & (bitboard - 1)
    return lsb_index, new_bitboard

  @staticmethod
  def print_bitboard(bitboard: int) -> None:
    """ Prints an 8x8 representative of a single bitboard. """
    print("\n  +----------------+ Bitboard Value: " + hex(bitboard))
    for rank in range(7, -1, -1):
      row = [f"{rank + 1} |"]
      for file in range(8):
        square = rank * 8 + file
        bit = (bitboard >> square) & 1
        row.append(" 1" if bit else " .")
      print(" ".join(row))
    print("  +-----------------+")
    print("    a b c d e f g h\n")