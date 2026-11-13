<script lang="ts" setup>
import { getPieceImage } from "~/utils";
import { PieceTheme, type Piece } from "~/types";

withDefaults(defineProps<{ piece: Piece; theme?: PieceTheme }>(), {
  theme: PieceTheme.THEME_1,
});

const isDragging = ref(false);
const pieceImg = useTemplateRef("pieceImg");
const { top, left } = useElementBounding(pieceImg);
const { x, y } = useDraggable(pieceImg, {
  initialValue: { y: top.value, x: left.value },
  onStart() {
    if (!pieceImg.value) return;
    isDragging.value = true;
    y.value = top.value;
    x.value = left.value;
    pieceImg.value.style.zIndex = "100";
  },
  onEnd() {
    isDragging.value = false;
  },
});
</script>

<template>
  <div
    ref="pieceRef"
    :class="[
      'w-full h-full flex items-end justify-center cursor-grab',
      {
        'items-end': theme === PieceTheme.THEME_1,
        'items-center': theme === PieceTheme.THEME_2,
      },
    ]"
  >
    <img
      ref="pieceImg"
      draggable="false"
      :src="getPieceImage(piece, theme)"
      :alt="`${piece.color} ${piece.type}`"
      :class="[
        'select-none touch-none',
        {
          'w-16': theme === PieceTheme.THEME_1,
          'w-18': theme === PieceTheme.THEME_2,
        },
      ]"
      :style="
        isDragging
          ? { position: 'fixed', top: `${y}px`, left: `${x}px`, zIndex: '100' }
          : {}
      "
    />
  </div>
</template>
