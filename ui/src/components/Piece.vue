<script lang="ts" setup>
import { getPieceImage } from "~/utils";
import { PieceTheme, type Piece } from "~/types";

withDefaults(defineProps<{ piece: Piece; theme?: PieceTheme }>(), {
  theme: PieceTheme.THEME_1,
});
</script>

<template>
  <div
    :class="[
      'w-full h-full flex items-end justify-center',
      {
        'items-end': theme === PieceTheme.THEME_1,
        'items-center': theme === PieceTheme.THEME_2,
      },
    ]"
  >
    <img
      :src="getPieceImage(piece, theme)"
      :alt="`${piece.color} ${piece.type}`"
      :class="{
        'w-[80%]': theme === PieceTheme.THEME_1,
        'w-[95%]': theme === PieceTheme.THEME_2,
      }"
    />
  </div>
</template>
