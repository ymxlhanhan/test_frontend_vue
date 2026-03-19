<script setup lang="ts">
import {ref} from "vue";

const times = ref(0);

function click(): void {
  times.value++;
}

</script>

<template>
  <button @click="click">点击过{{times}}次</button>
</template>

<style scoped>

</style>