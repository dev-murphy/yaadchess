<script setup lang="ts">

const appStore = useAppStore();
</script>

<template>
  <div class="h-screen bg-neutral-950 flex flex-col items-center justify-center text-4xl text-white">
    <h1>{{ appStore.name }}</h1>
    <Board />
  </div>
</template>
