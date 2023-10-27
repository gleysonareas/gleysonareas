<template>
  <div class="card">
    <div class="card__body">
      <p class="card__title">{{ data.title }}</p>
      <p class="card__description">{{ data.description }}</p>
      <a :href="data.path">
        <button class="card__button">Clique e acesse</button>
      </a>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  data: {} as any
})
</script>