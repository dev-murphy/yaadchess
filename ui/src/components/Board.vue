<script lang="ts" setup>
import { PieceTheme } from "~/types";

const { width } = useWindowSize();

const scalePercentage = computed(() => {
  if (width.value < 550) return 0;
  if (width.value > 1000) return 1;

  return (width.value - 550) / 450;
});

const squareWidth = computed(() =>  56 + 40 * scalePercentage.value);
const squareTextSize = computed(() =>  14 + 8 * scalePercentage.value);

const appStore = useAppStore();
onMounted(() => {
  appStore.initBoard();
});
</script>

<template>
  <div>
    <div v-for="row in appStore.board.length" :key="`row-${row}`" class="flex">
      <div
        v-for="col in appStore.board.length"
        :key="`col-${col}`"
        class="relative aspect-square hover:bg-red-500!"
        :style="{
          backgroundColor: appStore.board[row - 1][col - 1].color,
          width: `${squareWidth}px`,
        }"
      >
        <span
          v-if="col === 1"
          class="absolute top-0.5 left-0.75 font-bold"
          :style="{
            color:
              appStore.board[row - 1][col - 1].color === appStore.lightColor
                ? appStore.darkColor
      : appStore.lightColor,
                fontSize: `${squareTextSize}px`
          }"
          >{{ 8 - row + 1 }}</span
        >

        <span
          v-if="row === 8"
          class="absolute bottom-0.5 right-0.75 font-bold"
          :style="{
            color:
              appStore.board[row - 1][col - 1].color === appStore.lightColor
                ? appStore.darkColor
      : appStore.lightColor,
            fontSize: `${squareTextSize}px`
          }"
          >{{ "abcdefgh".charAt(col - 1) }}</span
        >

        <Piece
          v-if="appStore.board[row - 1][col - 1].piece !== null"
          :piece="appStore.board[row - 1][col - 1].piece"
          :theme="PieceTheme.THEME_1"
        />
      </div>
    </div>
  </div>
</template>
