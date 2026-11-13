<script lang="ts" setup>
import { PieceTheme } from "~/types";

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
        class="relative w-18 aspect-square"
        :style="{
          backgroundColor: appStore.board[row - 1][col - 1].color,
        }"
      >
        <span
          v-if="col === 1"
          class="absolute top-0.5 left-0.75 text-sm font-bold"
          :style="{
            color:
              appStore.board[row - 1][col - 1].color === appStore.lightColor
                ? appStore.darkColor
                : appStore.lightColor,
          }"
          >{{ 8 - row + 1 }}</span
        >

        <span
          v-if="row === 8"
          class="absolute bottom-0.5 right-0.75 text-sm font-bold"
          :style="{
            color:
              appStore.board[row - 1][col - 1].color === appStore.lightColor
                ? appStore.darkColor
                : appStore.lightColor,
          }"
          >{{ "abcdefgh".charAt(col - 1) }}</span
        >

        <Piece
          v-if="appStore.board[row - 1][col - 1].piece !== null"
          :piece="appStore.board[row - 1][col - 1].piece"
          :theme="PieceTheme.THEME_2"
        />
      </div>
    </div>
  </div>
</template>
